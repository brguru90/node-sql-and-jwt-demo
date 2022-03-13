var { randomBytes } = require('crypto');
const jwt = require('jsonwebtoken');
const { client } = require("../database/redisdb")


const _random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const JWT_TOKEN_EXPIRE = Number(process.env.JWT_TOKEN_EXPIRE) * 60 * 1000
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const generateAccessToken = (uname, csrf_token, data = {}, exp = null,token_id=null) => {
    const access_token_payload = {
        'data': data,
        'uname': uname,
        'token_id': token_id || data?.uuid + "_" + randomBytes(50).toString('base64') + "_" + String(new Date().getTime()),
        'exp': exp || new Date().getTime() + JWT_TOKEN_EXPIRE,  // Expiries at
        'iat': new Date().getTime(),
        csrf_token
    }
    return {
        access_token: jwt.sign(access_token_payload, JWT_SECRET_KEY),
        access_token_payload
    }
}


const setCookie = (req, res, key, value, expires, httpOnly = true) => {
    console.log("domain", req.get('origin'), "expire", new Date(expires).toLocaleString())
    if (typeof (value) != "string")
        value = JSON.stringify(value)
    res.cookie(key, value, { expires: new Date(expires), httpOnly: httpOnly, sameSite: "Strict" });

}


// used in standalone API specifically to check login status
const loginStatus = async (req, res) => {
    let decoded_token = null
    try {
        // validating jwt
        decoded_token = jwt.verify(req.cookies.access_token, JWT_SECRET_KEY);
        // also checking whether token is blacklisted
        if (await client.get(decoded_token?.token_id)) {
            decoded_token = false
        }
        else if (!req.headers['csrf_token']) {
            console.log("~~~~~~~~~~~ > loginStatus csrf mis")
            const { access_token } = generateAccessToken(decoded_token?.data?.email, ensure_csrf_token(res), { email: decoded_token?.data?.email, uuid: decoded_token?.data?.uuid }, decoded_token?.exp, decoded_token?.token_id)
            setCookie(req, res, "access_token", access_token, decoded_token?.exp)
        }
    } catch (error) {}
    return decoded_token
}

// primarily used in middleware
const validateCredential = async (req, res) => {
    let decoded_token = null
    try {
        // validating jwt
        decoded_token = jwt.verify(req.cookies.access_token, JWT_SECRET_KEY);
        // console.log("1 decoded_token", decoded_token)
        req.decoded_token = decoded_token
        if (!decoded_token) {
            res.status(401).json({
                msg: "unAuthorized",
                status: "error",
            })
        }
        // also checking whether token is blacklisted
        else if(await client.get(decoded_token?.token_id)) {
            decoded_token=null
            res.status(401).json({
                msg: "unAuthorized",
                status: "error",
            })
        }
        else if (process.env.NODE_ENV == "production" && !req.headers['csrf_token']) {
            decoded_token=null
            res.status(403).json({
                msg: "Not allowed",
                status: "error",
            })
        }
       
    } catch (error) {
        res.status(401).json({
            msg: "unAuthorized",
            status: "error",
        })
    }
    return decoded_token
}


const ensure_csrf_token = (res) => {
    const csrf_token = randomBytes(100).toString('base64')
    res.header("csrf_token", csrf_token);
    return csrf_token
}


module.exports = {
    random: _random,
    generateAccessToken,
    setCookie,
    validateCredential,
    loginStatus,
    ensure_csrf_token
}
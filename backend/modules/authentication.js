const jwt = require('jsonwebtoken');
const { client } = require("../database/redisdb")


const _random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const JWT_TOKEN_EXPIRE = Number(process.env.JWT_TOKEN_EXPIRE) * 60 * 1000
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const generateAccessToken = (uname, data = {}) => {
    const access_token_payload = {
        'data': data,
        'uname': uname,
        'token_id': data?.uuid + "_" + String(_random(1, 1000)) + "_" + String(new Date().getTime()),
        'exp': new Date().getTime() + JWT_TOKEN_EXPIRE,
        'iat': new Date().getTime(),
    }
    return {
        access_token: jwt.sign(access_token_payload, JWT_SECRET_KEY),
        access_token_payload
    }
}


const setCookie = (res, key, value,httpOnly=true) => {
    if (typeof (value) != "string")
        value = JSON.stringify(value)
    res.cookie(key, value, { maxAge: JWT_TOKEN_EXPIRE, httpOnly: httpOnly,sameSite:"Strict" });
}


const  loginStatus = async (req) => {
    let decoded_token = null
    try {
        // validating jwt
        decoded_token = jwt.verify(req.cookies.access_token, JWT_SECRET_KEY);
        // also checking whether token is blacklisted
        if(await client.get(decoded_token?.token_id)){
            decoded_token=false
        }
    } catch (error) { }
    return decoded_token
}

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
        if(await client.get(decoded_token?.token_id)){
            res.status(401).json({
                msg: "unAuthorized",
                status: "error",
            })
        }
    } catch (error) {
        console.error(error)
        res.status(401).json({
            msg: "unAuthorized",
            status: "error",
        })
    }
    return decoded_token
}


module.exports = {
    random: _random,
    generateAccessToken,
    setCookie,
    validateCredential,
    loginStatus
}
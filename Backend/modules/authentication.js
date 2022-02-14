const jwt = require('jsonwebtoken');


const _random=(min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const JWT_TOKEN_EXPIRE=Number(process.env.JWT_TOKEN_EXPIRE)*60*1000


const generateAccessToken = (uname, data = {}) => {
    const access_token_payload = {
        'data': JSON.stringify(data),
        'uname': uname,
        'token_id': String(_random(1, 1000)) + "_" + String(new Date().getTime()),
        'exp': new Date().getTime() + JWT_TOKEN_EXPIRE,
        'iat': new Date().getTime(),
    }
    return jwt.sign(access_token_payload, process.env.JWT_SECRET_KEY)
}


const set_cookie=(res,key,value)=>{
    res.cookie(key,value, { maxAge: JWT_TOKEN_EXPIRE, httpOnly: true });
}


module.exports={
    random:_random,
    generateAccessToken,
    set_cookie
}
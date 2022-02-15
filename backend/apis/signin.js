const express = require("express")
const router = express.Router()
const { Users, activeSession } = require("../database/sqldb")
const { client } = require("../database/redisdb")
const { generateAccessToken, setCookie, loginStatus, getClientIP } = require("../modules/")

router.use((req, res, next) => {
    console.log("----------Unprotected APIs signup & login middleware-------------")
    next()
})


router.post("/sign_up", (req, res) => {
    Users.create(req.body)
        .then(async (user) => {
            const new_entry = user.toJSON()
            const { access_token, access_token_payload } = generateAccessToken(new_entry?.email, { email: new_entry?.email, uuid: new_entry?.uuid })
            setCookie(res, "access_token", access_token)
            setCookie(res, "user_data", new_entry)
            await activeSession.create({
                user_uuid: new_entry?.uuid,
                token_id: access_token_payload.token_id,
                ua: JSON.stringify(req.useragent),
                ip: getClientIP(req)
            })
            res.status(201).json({
                msg: "Account created",
                status: "success",
                data: new_entry,
                access_token: access_token
            })
        })
        .catch(err => {
            console.log(err)
            res.status(err?.errors ? 406 : 500).json({
                status: "error",
                msg: err?.errors?.map(({ message, path }) => {
                    return {
                        field: path,
                        message
                    }
                }) || err?.name || "unknown error"
            })
        })
})


router.post("/login", (req, res) => {
    Users.findOne({ where: { email: req?.body?.email } })
        .then(async (user) => {
            if (!user) {
                return res.status(401).json({
                    msg: "Invalid credential",
                    status: "error"
                })
            }
            const new_entry = user.toJSON()
            const { access_token, access_token_payload } = generateAccessToken(new_entry?.email, { email: new_entry?.email, uuid: new_entry?.uuid })
            setCookie(res, "access_token", access_token)
            setCookie(res, "user_data", JSON.stringify(new_entry))
            await activeSession.create({
                user_uuid: new_entry?.uuid,
                token_id: access_token_payload.token_id,
                ua: JSON.stringify(req.useragent),
                ip: getClientIP(req)
            })

            // await client.hSet(access_token_payload.data.uuid,
            //     access_token_payload.token_id,
            //     JSON.stringify({ ip: getClientIP(req), ua: req.useragent })
            // )
            // await client.expireAt(access_token_payload.token_id, parseInt(access_token_payload.exp / 1000))
            res.status(200).json({
                msg: "Authorization success",
                status: "success",
                data: new_entry,
                access_token: access_token
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                status: "error",
                msg: err?.errors?.map(({ message, path }) => {
                    return {
                        field: path,
                        message
                    }
                }) || err?.name || "unknown error"
            })
        })
})


router.all("/login_status", (req, res) => {
    if (login_status = loginStatus(req)) {
        return res.status(200).json({
            msg: "active",
            status: "success",
            data: login_status?.data
        })
    }
    res.status(401).json({
        msg: "unAuthorized",
        status: "error",
    })
})




module.exports = router

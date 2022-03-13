const express = require("express")
const router = express.Router()
const sqldb = require("../database/sqldb")
const { generateAccessToken, setCookie, loginStatus, getClientIP, ensure_csrf_token } = require("../modules/")



router.post("/sign_up", (req, res) => {

    sqldb.Users.create(req.body)
        .then(async (user) => {
            const new_entry = user.toJSON()
            const { access_token, access_token_payload } = generateAccessToken(new_entry?.email, ensure_csrf_token(res), { email: new_entry?.email, uuid: new_entry?.uuid })
            setCookie(req, res, "access_token", access_token, access_token_payload.exp)
            // allow js to read & modify cookie programmatically
            setCookie(req, res, "user_data", new_entry, access_token_payload.exp, false)
            await sqldb.activeSession.create({
                user_uuid: new_entry?.uuid,
                token_id: access_token_payload.token_id,
                ua: JSON.stringify(req.useragent),
                ip: getClientIP(req),
                exp: access_token_payload.exp,
                status: "active"
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
    sqldb.Users.findOne({ where: { email: req?.body?.email, password: req?.body?.password } })
        .then(async (user) => {
            if (!user) {
                return res.status(401).json({
                    msg: "Invalid credential",
                    status: "error"
                })
            }
            const new_entry = user.toJSON()
            const { access_token, access_token_payload } = generateAccessToken(new_entry?.email, ensure_csrf_token(res), { email: new_entry?.email, uuid: new_entry?.uuid })
            setCookie(req, res, "access_token", access_token, access_token_payload.exp)
            // allow js to read & modify cookie programmatically
            setCookie(req, res, "user_data", JSON.stringify(new_entry), access_token_payload.exp, false)
            await sqldb.activeSession.create({
                user_uuid: new_entry?.uuid,
                token_id: access_token_payload.token_id,
                ua: JSON.stringify(req.useragent),
                ip: getClientIP(req),
                exp: access_token_payload.exp,
                status: "active"
            })
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
    loginStatus(req, res).then(login_status => {
        if (login_status) {
            return res.status(200).json({
                msg: "active",
                status: "success",
                data: login_status?.data
            })
        }
        res.status(401).json({
            msg: login_status == false ? "unAuthorized" : "Session blocked",
            status: "error",
        })
    })

})




module.exports = router

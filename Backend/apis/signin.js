const express = require("express")
const router = express.Router()
const { Users } = require("../database/")
const {generateAccessToken,setCookie} = require("../modules/")

router.use((req, res, next) => {
    console.log("----------Unprotected APIs signup & login middleware-------------")
    next()
})


router.post("/sign_up", (req, res) => {
    Users.create(req.body)
        .then(user => {
            const new_entry=user.toJSON()
            const access_token= generateAccessToken(new_entry?.email,{email:new_entry?.email,uuid:new_entry?.uuid})
            setCookie(res,"access_token",access_token)
            setCookie(res,"user_data",new_entry)
            res.status(200).json({
                msg: "apis/test1.js",
                status: "success",
                data: new_entry,
                access_token: access_token
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                msg: "apis/test1.js",
                status: "error",
                data: err?.errors?.map(({ message, path }) => {
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
        .then(user => {
            if(!user){
                return res.status(401).json({
                    msg: "Invalid credential",
                    status: "error"
                })
            }
            const new_entry=user.toJSON()
            const access_token= generateAccessToken(new_entry?.email,{email:new_entry?.email,uuid:new_entry?.uuid})
            setCookie(res,"access_token",access_token)
            setCookie(res,"user_data",JSON.stringify(new_entry))
            res.status(200).json({
                msg: "apis/test1.js",
                status: "success",
                data: new_entry,
                access_token: access_token
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                msg: "apis/test1.js",
                status: "error",
                data: err?.errors?.map(({ message, path }) => {
                    return {
                        field: path,
                        message
                    }
                }) || err?.name || "unknown error"
            })
        })
})



module.exports = router

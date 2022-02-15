const express = require("express")
const router = express.Router()
const { Users } = require("../database/sqldb")
const {generateAccessToken,setCookie,loginStatus} = require("../modules/")

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
            res.status(201).json({
                msg: "Account created",
                status: "success",
                data: new_entry,
                access_token: access_token
            })
        })
        .catch(err => {
            console.log(err)
            res.status(err?.errors?406:500).json({
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
    if(login_status=loginStatus(req)){
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

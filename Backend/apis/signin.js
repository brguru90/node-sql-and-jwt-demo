const express = require("express")
const router = express.Router()
const { Users } = require("../database/")
const {generateAccessToken,set_cookie} = require("../modules/")

router.use((req, res, next) => {
    console.log("----------Unprotected APIs signup & login middleware-------------")
    next()
})

// Sign up
router.post("/user", (req, res) => {
    Users.create(req.body)
        .then(user => {
            const new_entry=user.toJSON()
            const access_token= generateAccessToken(new_entry?.email,{email:new_entry?.email,uuid:new_entry?.uuid})
            set_cookie(res,"access_token",access_token)
            set_cookie(res,"user_data",JSON.stringify(new_entry))
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

// informing any remaining method are not allowed
router.all("/user", (req, res) => {
    res.sendStatus(405)
})

router.post("/login", (req, res) => {
    Users.findOne({ where: { email: req?.body?.email } })
        .then(user => {
            const new_entry=user.toJSON()
            const access_token= generateAccessToken(new_entry?.email,{email:new_entry?.email,uuid:new_entry?.uuid})
            set_cookie(res,"access_token",access_token)
            set_cookie(res,"user_data",JSON.stringify(new_entry))
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

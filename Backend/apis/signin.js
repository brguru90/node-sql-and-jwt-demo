const express = require("express")
const router = express.Router()
const { Users } = require("../database/")

router.use((req, res, next) => {
    console.log("----------/set1's middleware-------------")
    next()
})

router.post("/user", (req, res) => {
    console.log("apis/test1.js", req.body)


    Users.create(req.body)
        .then(user => {
            res.status(200).json({
                msg: "apis/test1.js",
                status: "success",
                data: user.toJSON()
            })
        })
        .catch(err => {
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

router.get("/user", (req, res) => {
    console.log("apis/test1.js")
    res.json({
        msg: "apis/test1.js",
        status: "success"
    })
})


router.delete("/user", (req, res) => {
    console.log("apis/test1.js")
    res.json({
        msg: "apis/test1.js",
        status: "success"
    })
})

module.exports = router

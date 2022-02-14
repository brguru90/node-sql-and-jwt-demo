const express = require("express")
const router = express.Router()
const { Users } = require("../database/")


router.use((req, res, next) => {
    console.log("----------Protected APIs middleware-------------")
    next()
})


// Profile update
router.put("/user", (req, res) => {
    const { where, newUserData } = req.body
    delete newUserData.uuid
    Users.update(newUserData, {
        where: where
    })
        .then(affected_rows => {
            res.status(200).json({
                msg: "apis/test1.js",
                status: "success",
                data: affected_rows
            })
        })
        .catch(err => {
            console.error(err)
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


// Delete account
router.delete("/user", (req, res) => {
    const { where } = req.body

    Users.destroy({
        where: where
    })
        .then(affected_rows => {
            res.status(200).json({
                msg: "apis/test1.js",
                status: "success",
                data: affected_rows
            })
        })
        .catch(err => {
            console.error(err)
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

// Get user data
router.get("/user", (req, res) => {
    Users.findOne({ where: { uuid: req?.query?.uuid } })
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


module.exports = router

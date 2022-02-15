const express = require("express")
const router = express.Router()
const { Users } = require("../database/sqldb")
const { validateCredential } = require("../modules/")



router.use("/user", (req, res, next) => {
    console.log("----------Protected APIs middleware-------------")
    if (validateCredential(req, res)) {
        next()
    }
})


// Profile update
router.put("/user", (req, res) => {
    const { newUserData } = req.body
    delete newUserData.uuid
    Users.update(newUserData, {
        where: {
            uuid: req?.decoded_token?.data?.uuid
        }
    })
        .then(affected_rows => {
            res.status(200).json({
                msg: "Updated",
                status: "success",
                data: affected_rows
            })
        })
        .catch(err => {
            console.error(err)
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


// Delete account
router.delete("/user", (req, res) => {
    Users.destroy({
        where: {
            uuid: req?.decoded_token?.data?.uuid
        }
    })
        .then(affected_rows => {
            res.clearCookie("access_token");
            res.clearCookie("user_data");
            res.status(200).json({
                msg: "Deleted",
                status: "success",
                data: affected_rows
            })
        })
        .catch(err => {
            console.error(err)
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

// Get user data
router.get("/user", (req, res) => {
    Users.findOne({ where: { uuid: req?.decoded_token?.data?.uuid } })
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    msg: "No record found",
                    status: "error"
                })
            }
            res.status(200).json({
                msg: "Found",
                status: "success",
                data: user.toJSON()
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: err?.errors?.map(({ message, path }) => {
                    return {
                        field: path,
                        message
                    }
                }) || err?.name || "unknown error"
            })
        })
})


// Get user data
router.get("/user/logout", (req, res) => {
    try {
        res.clearCookie("access_token");
        res.clearCookie("user_data");
        res.status(200).json({
            msg: "Logged out",
            status: "success",
        })
    } catch (error) {
        res.status(500).json({
            msg: "Server side error",
            status: "error"
        })
    }
})

// informing any remaining method are not allowed
router.all("/user", (req, res) => {
    res.sendStatus(405)
})


module.exports = router

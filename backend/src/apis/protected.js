const express = require("express")
const router = express.Router()
const sqldb = require("../database/sqldb")
const { validateCredential } = require("../modules/")
const { client } = require("../database/redisdb")
const { Op } = require("sequelize");


// apply middleware to only /user
router.use("/user", (req, res, next) => {
    console.log("----------Protected APIs middleware-------------")
    validateCredential(req, res).then(valid => {
        if (valid) {
            next()
        }
    })

})


// Profile update
router.put("/user", (req, res) => {
    const { newUserData } = req.body
    delete newUserData.uuid
    sqldb.Users.update(newUserData, {
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
    sqldb.Users.destroy({
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
    let _page = Number(req?.query?.page)
    console.log("_page",_page)
    if (_page) {
        const _limit = Number(req?.query?.limit) || 100
        sqldb.Users.findAndCountAll()
            .then((data) => {
                const total_pages = Math.ceil(data.count / _limit);
                _page=_page<=total_pages?_page:total_pages
                const _offset = _limit * (_page - 1);
                sqldb.Users.findAndCountAll({
                    limit: _limit,
                    offset: _offset,
                    $sort: { id: 1 }
                })
                    .then(function (user) {
                        if (!user) {
                            return res.status(400).json({
                                msg: "No record found",
                                status: "error"
                            })
                        }
                        res.status(200).json({
                            msg: "Found",
                            status: "success",
                            data: {
                                users:user,
                                total_pages,
                                total_records: data.count,
                                cur_page:_page
                            }                           
                        })
                    })
                    .catch(err => {
                        console.log(err)
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
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    msg: err?.errors?.map(({ message, path }) => {
                        return {
                            field: path,
                            message
                        }
                    }) || err?.name || "unknown error"
                })
            })
    }
    else {
        sqldb.Users.findOne({ where: { uuid: req?.decoded_token?.data?.uuid } })
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
                console.log(err)
                res.status(500).json({
                    msg: err?.errors?.map(({ message, path }) => {
                        return {
                            field: path,
                            message
                        }
                    }) || err?.name || "unknown error"
                })
            })
    }

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

router.get("/user/active_sessions", (req, res) => {
    sqldb.activeSession.findAll({
        where: {
            user_uuid: req?.decoded_token?.data?.uuid,
            // token_id:{
            //     [Op.not]:req?.decoded_token?.token_id
            // }
        }
    })
        .then(sessions => {
            if (!sessions) {
                return res.status(400).json({
                    msg: "No record found",
                    status: "error"
                })
            }
            sessions.forEach(s => {
                if (s.token_id == req?.decoded_token?.token_id) {
                    s.status = "current"
                }
            })
            res.status(200).json({
                msg: "Found",
                status: "success",
                data: sessions
            })
        })
        .catch(err => {
            console.log("active_sessions", err)
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



router.post("/user/block_token", (req, res) => {
    console.log("block_token")
    const uuid = req?.decoded_token?.data?.uuid

    sqldb.activeSession.update({ status: "blocked" }, {
        where: {
            user_uuid: uuid,
            token_id: req?.body?.token_id,
            exp: req?.body?.exp,
            status: "active"
        }
    })
        .then(async (affected_rows) => {
            const exp = req?.body?.exp
            const expire_sec = parseInt((new Date(exp).getTime() - new Date().getTime()) / 1000)
            const token_id = req?.body?.token_id
            console.log("block_token", affected_rows,
                token_id, expire_sec
            )

            if (affected_rows && affected_rows[0]) {
                // redis will automatically delete entry when expire value is given
                client.setEx(token_id, expire_sec >= 0 ? expire_sec : 1, uuid)
                    .then((...result) => {
                        console.log("before delete", result)
                        setTimeout(() => {
                            sqldb.activeSession.destroy({
                                where: {
                                    user_uuid: uuid,
                                    token_id: token_id,
                                    exp
                                }
                            }).then(affected_rows => {
                                console.log("deleted token", affected_rows, {
                                    user_uuid: uuid,
                                    token_id: token_id
                                })
                            })
                                .catch(err => {
                                    console.error(err)
                                })
                        }, expire_sec * 1000);

                    })

                return res.status(200).json({
                    msg: "Blocked",
                    status: "success",
                    data: affected_rows
                })
            }
            res.status(404).json({
                msg: "Token doesn't exists/Already blacklisted",
                status: "error"
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





// informing any remaining method are not allowed
router.all("/user", (req, res) => {
    res.sendStatus(405)
})


module.exports = router

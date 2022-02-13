const express = require("express")
const router = express.Router()

router.use((req, res, next) => {
    console.log("----------/set2's middleware-------------")
    next()
})

router.all("/test2", (req, res) => {
    console.log("apis/test2.js")
    res.send("apis/test2.js")
})

module.exports = router

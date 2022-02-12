const express = require("express")
const router = express.Router()

router.use((req, res, next) => {
    console.log("----------/set1's middleware-------------")
    next()
})

router.all("/test1", (req, res) => {
    console.log("apis/test1.js")
    res.send("apis/test1.js")
})

module.exports = router

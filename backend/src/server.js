const express = require("express")
const app = express()
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const useragent = require('express-useragent')
dotenv.config({ path: __dirname + "/../../.env" });

require("./database/sqldb")
require("./database/redisdb")
require("./cron_jobs/").init_crons()


const port = process.env.PORT || 8000

app.use(function (req, res, next) {
    // console.log("global middleware")
    return next()
})
app.use(
    express.json({
        limit: "50mb",
        extended: false,
    })
)
app.use(cookieParser());
app.use(useragent.express());



console.log(`DocumentRoot ${__dirname + "/../../frontend/build"}`)

// APIs import order matters
app.use("/", express.static(__dirname + "/../../frontend/build"))
app.use("/api/check_csrf", express.static(__dirname + "/static/check_csrf.html"))
app.use("/api/adds", express.static(__dirname + "/static/assume_ads.html"))
app.use("/api/", require("./apis/protected"))
app.use("/api/", require("./apis/signin"))
app.use("/api/", require("./apis/set1"))
app.use("/api/", require("./apis/set2"))

app.get("*", function (req, res) {
    console.log("404")
    res.status(404).send("<html><body><center><h1>404</h1></center></body></html)")
})

app.listen(port, () => {
    console.log(`App started running at ${port}\ncwd is ${__dirname}`)
    console.log(`running ========>  http://127.0.0.1:${port}`)
})
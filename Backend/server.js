const express = require("express")
const app = express()
require("./database/")



var port = 8000

app.use(function (req, res, next) {
    console.log("global middleware")
    return next()
})

app.use(
    express.json({
        limit: "50mb",
        extended: false,
    })
)




console.log(`DocumentRoot ${__dirname + "/static"}`)
app.use("/", express.static(__dirname + "/static/"))
app.use("/api/", require("./apis/set1"))
app.use("/api/", require("./apis/set2"))
app.use("/api/", require("./apis/signin"))
app.use("/api/", require("./apis/protected"))

app.get("*", function (req, res) {
    console.log("404")
    res.send("<html><body><center><h1>404</h1></center></body></html)")
})

app.listen(port, () => {
    console.log(`App started running at ${port}\ncwd is ${__dirname}`)
    console.log(`running ========>  http://127.0.0.1:${port}`)
})
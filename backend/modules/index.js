const auth = require("./authentication")
const general = require("./general")

module.exports={
    ...auth,
    ...general
}
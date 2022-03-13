const { activeSession } = require("../database/sqldb")
const { Op } = require("sequelize");



// clear expired redis tokens
const clear_expired_token = () => {
    console.log("clear_expired_token",new Date().toLocaleString())
    activeSession.destroy({
        where: {
            exp: {
                [Op.lte]: new Date().getTime()
            }
        }
    })
        .then(affected_rows => {
            console.log("deleted token", affected_rows,new Date())
        })
        .catch(err => {
            console.error(err)
        })
}

module.exports = {
    clear_expired_token
}
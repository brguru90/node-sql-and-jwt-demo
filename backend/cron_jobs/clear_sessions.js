const { Users, activeSession } = require("../database/sqldb")
const { client } = require("../database/redisdb")
const { Op } = require("sequelize");
const { use } = require("../apis/protected");





// clear lef tout redis token
const clear_blocked_token = () => {
    console.log("clear_blocked_token")

    activeSession.findAll({
        where: {
            status: "blocked"
        }
    })
        .then(sessions => {
            console.log("clear_blocked_token", sessions.length)
            sessions.map(async (session) => {
                const _exists = await client.get(session.token_id)
                if (!_exists) {
                    console.log("deleted", session.toJSON())
                    activeSession.destroy({
                        where: {
                            user_uuid: session.toJSON().user_uuid,
                            token_id: session.toJSON().token_id
                        }
                    }).then(affected_rows => {
                        console.log("deleted token", affected_rows, {
                            ser_uuid: session.toJSON().user_uuid,
                            token_id: session.toJSON().token_id
                        })
                    })
                        .catch(err => {
                            console.error(err)
                        })
                }
                return _exists
            });

        })
        .catch(err => {
            console.log("clear_blocked_token", err)
        })
}




// clear expired redis token
const clear_expired_token = () => {
    console.log("clear_expired_token")
    activeSession.destroy({
        where: {
            exp: {
                [Op.lte]: new Date().getTime()
            }
        }
    })
        .then(affected_rows => {
            console.log("deleted token", affected_rows)
        })
        .catch(err => {
            console.error(err)
        })
}

module.exports = {
    clear_expired_token
}
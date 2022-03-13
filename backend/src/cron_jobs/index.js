const cron = require('node-cron');
const { clear_expired_token } = require("./clear_sessions")
const {client}= require("../database/redisdb")


const init_crons = async () => {
    if(await client.get(`${process.env.NODE_ENV}_clear_expired_token_cron`)){
        return
    }

    client.setEx(`${process.env.NODE_ENV}_clear_expired_token_cron`, 60, "started")
    console.log("========> init_crons")
    
    cron.schedule("*/5 * * * *", () => {
        clear_expired_token()
    }, {
        scheduled: true,
        timezone: "Asia/Kolkata"
    });
}

module.exports={
    init_crons
}
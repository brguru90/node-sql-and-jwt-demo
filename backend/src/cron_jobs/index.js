const cron = require('node-cron');
const { clear_expired_token } = require("./clear_sessions")



const init_crons = () => {
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
const cron = require('node-cron');
const { clear_expired_token } = require("./clear_sessions")



const init_crons = () => {
    console.log("========> init_crons")
    cron.schedule("*/1 * * * *", () => {
        console.log("------Job started at: ", new Date());
        clear_expired_token()
        console.log("------Job ended at: ", new Date());
    }, {
        scheduled: true,
        timezone: "Asia/Kolkata"
    });
}

module.exports={
    init_crons
}
const redis = require("redis")

const db = {};

(async function () {
    if (!db.client) {
        db.client = redis.createClient(6379);
        await db.client.connect();

        db.client.on('error', (err) => {
            console.log(" !!! =======> RedisError " + err);
            throw err
        })
        console.log(db.client.ping()) 
    }
})()

module.exports = db
const redis = require("redis")

const db = {};

// using IIFE able to import member of db object on other files,since the member initialized before export
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
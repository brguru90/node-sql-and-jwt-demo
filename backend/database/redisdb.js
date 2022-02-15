
const connectRedis = () => {
    let client = redis.createClient();
    client.on('error', (err) => {
        console.log("Error " + err);
        throw err
    })
}

module.exports = {
    client,
    connectRedis
}
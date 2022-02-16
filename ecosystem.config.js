module.exports = {
    apps: [
        {
            name: "jwt_sql_demo",
            script: "./backend/src/server.js",
            watch: true,
            "ignore_watch": ["production.database.sqlite", "production.database.sqlite-journal"],
            env_qa: {
                "PORT": 8888,
                "NODE_ENV": "testing"
            },
            env_production: {
                "PORT": 8080,
                "NODE_ENV": "production",
            }
        }
    ]
}
module.exports = {
    apps: [
        {
            name: "jwt_sql_demo",
            script: "./backend/src/server.js",
            watch: true,
            "ignore_watch": ["production.database.sqlite", "production.database.sqlite-journal"],
            env_qa: {
                "PORT": 8888,
                "NODE_ENV": "testing",
                "JWT_SECRET_KEY":"qa_jwt_key_1234"
            },
            env_production: {
                "PORT": 8080,
                "NODE_ENV": "production",
                "JWT_SECRET_KEY":"prod_jwt_key_1234"
            }
        }
    ]
}
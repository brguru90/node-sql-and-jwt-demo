module.exports = {
    apps: [
        {
            name: "jwt_sql_demo",
            script: "./backend/src/server.js",
            watch: false,
            "ignore_watch": ["production.database.sqlite", "production.database.sqlite-journal"],
            "max_memory_restart": "2000M",
            "node_args": [
                "--max_old_space_size=3000"
            ],
            instances: "max",
            exec_mode: "cluster",
            env_qa: {
                "PORT": 8888,
                "NODE_ENV": "testing",
                "JWT_SECRET_KEY": "qa_jwt_key_1234"
            },
            env_production: {
                "PORT": 8080,
                "NODE_ENV": "production",
                "JWT_SECRET_KEY": "prod_jwt_key_1234"
            }
        }
    ]
}
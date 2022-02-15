module.exports = {
    apps : [
        {
          name: "jwt_sql_demo",
          script: "./backend/server.js",
          watch: true,
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
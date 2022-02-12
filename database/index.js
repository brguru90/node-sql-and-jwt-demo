const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite' ,
    logging: msg => console.log("==> SQLite:",msg)
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("../models/user.model.js")(sequelize, Sequelize);

module.exports = db;
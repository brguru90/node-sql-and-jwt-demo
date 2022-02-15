const { Sequelize } = require('sequelize');


const db = {};

if (!db.sequelize) {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './database.sqlite',
        logging: msg => console.log("==> SQLite:", msg)
    });
    (async function () {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })()



    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.Users = require("../models/user.model.js")(sequelize, Sequelize);
    db.activeSession = require("../models/active_session.model.js")(sequelize, Sequelize);
    db.sequelize.sync();
}

module.exports = db;
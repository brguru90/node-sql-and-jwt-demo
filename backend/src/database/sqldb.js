const { Sequelize } = require('sequelize');


const db = {
    Sequelize: null,
    sequelize: null,
    Users: null,
    activeSession: null
};
// invoking db connection immediately so able to import member of db object on other files,since the member initialized before export
if (!db.sequelize) {

    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    const host = process.env.DB_HOST
    const database = process.env.DATABASE
    const port = process.env.DB_PORT

    pool = {
        max: 4,
        min: 0,
        idle: 30000,
        acquire: 60000,
    }

    let sequelize;
    (async function () {
        if (process.env.NODE_ENV != "production") {
            sequelize = new Sequelize({
                dialect: 'sqlite',
                storage: `./${process.env.NODE_ENV}.${database}.sqlite`,
                logging: msg => console.log("==> SQLite:", msg)
                // logging: msg => { }
            });
        }
        else {

            try {
                sequelize = new Sequelize("postgres", user, password, {
                    pool,
                    host,
                    port,
                    dialect: 'postgres',
                    logging: msg => console.log("==> Sequelize:", msg)
                    // logging: msg => { }
                });
                await sequelize.authenticate();
                console.log('==> Sequelize:- Connection has been established successfully.');
                try {
                    let query = `SELECT * FROM pg_database WHERE datname = '${database}';`
                    if ((await sequelize.query(query))[0].length == 0) {
                        query = `CREATE DATABASE ${database};`
                        await sequelize.query(query)
                        console.info("==> Sequelize:- Database created successfully");
                    }
                    sequelize.close();
                    sequelize = null

                    sequelize = new Sequelize(database, user, password, {
                        pool,
                        host,
                        port,
                        dialect: 'postgres',
                        // logging: msg => console.log("==> Sequelize:", msg)
                        logging: msg => { }
                    });
                    await sequelize.authenticate();
                    console.log('==> Sequelize:- Connection has been re-established.');
                    db_connected = true

                } catch (error) {
                    console.error('==> Sequelize:- error in connecting or creating database:', error.message);
                }
            } catch (error) {
                console.error('==> Sequelize:- Unable to connect to the database:', error);
            }
        }


        db.Sequelize = Sequelize;
        db.sequelize = sequelize;
        db.Users = require("../models/user.model.js")(sequelize, Sequelize);
        db.activeSession = require("../models/active_session.model.js")(sequelize, Sequelize);
        db.sequelize.sync();

        console.log("----------------------DB init complete---------------------------")

    })()



}

module.exports = db;
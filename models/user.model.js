const { DataTypes } = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
        },
    }, {
        indexes: [
            {
                unique: true,
                fields: ['email',"uuid"]
            },
        ]
    });

    return User;
};
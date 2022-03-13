const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
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
            {
                fields: ["uuid"]
            },
        ]
    });

    return User;
};
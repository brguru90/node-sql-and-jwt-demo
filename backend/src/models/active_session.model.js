const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    const activeSession = sequelize.define("active_session", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        user_uuid: {
            type: DataTypes.STRING
        },
        token_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        ua: {
            type: DataTypes.TEXT,
        },
        ip: {
            type: DataTypes.STRING,
        },
        exp: {
            type: DataTypes.BIGINT,
        },
        status: {
            type: DataTypes.STRING,
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ["uuid","token_id"]
            },
            {
                fields: ['user_uuid']
            },
            {
                fields: ['token_id']
            },
        ]
    });

    return activeSession;
};
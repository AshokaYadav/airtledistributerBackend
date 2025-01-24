const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const User = sequelize.define('admins', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobileno: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = User;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Define the Bank model
const Bank = sequelize.define('Banks', {
    accountid: {
        type: DataTypes.STRING,
        unique: true, // Account ID should be unique
        allowNull: false, // Must have a value
    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: false, // Must have a value
    },
    account_type: {
        type: DataTypes.STRING,
    },
    balance: {
        type: DataTypes.DECIMAL(10, 2), // No need to enforce non-null here
    },
    account_status: {
        type: DataTypes.BOOLEAN,
    },
    openingDate: {
        type: DataTypes.DATE,
    },
    lastTransactionDate: {
        type: DataTypes.DATE,
    }
});

module.exports = Bank;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Define the Transaction model
const Transaction = sequelize.define('Transactions', {
    transactionid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure transaction ID is unique
    },
    accountid: {
        type: DataTypes.STRING,
        allowNull: false, // Associated account ID
    },
    transaction_type: {
        type: DataTypes.STRING, // Type of transaction (Deposit, Withdrawal, Transfer)
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2), // The amount involved in the transaction
        allowNull: false,
    },
    transaction_date: {
        type: DataTypes.DATE,
        allowNull: false, // Date and time when the transaction occurred
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.STRING, // Status of the transaction (Pending, Completed, Failed)
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING, // Optional description or notes about the transaction
        allowNull: true,
    },
});

module.exports = Transaction;

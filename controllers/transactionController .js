const Transaction  = require('../models/Transaction'); // Assuming you have the Transaction model set up

// Create a new transaction
const createTransaction = async (req, res) => {
    try {
        const { accountid, transaction_type, amount, status, description } = req.body;

        // Generate a unique transaction ID
        const transactionid = `TXN${Date.now()}`;

        // Create a new transaction
        const newTransaction = await Transaction.create({
            transactionid,
            accountid,
            transaction_type,
            amount,
            status,
            description
        });

        
        res.status(201).json(newTransaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating transaction" });
    }
};

// Get all transactions for an account
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll({
            where: { accountid: req.params.accountid }
        });

        if (!transactions.length) {
            return res.status(404).json({ message: "No transactions found for this account" });
        }

        res.status(200).json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching transactions" });
    }
};

// Get a specific transaction by ID
const getTransactionById = async (req, res) => {
    try {
        const { transactionid } = req.params;

        const transaction = await Transaction.findOne({
            where: { transactionid }
        });

        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        res.status(200).json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching transaction" });
    }
};

// Update a transaction
const updateTransaction = async (req, res) => {
    const { transactionid } = req.params;
    const { transaction_type, amount, status, description } = req.body;

    try {
        const transaction = await Transaction.findOne({
            where: { transactionid }
        });

        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        // Update the transaction fields
        transaction.transaction_type = transaction_type || transaction.transaction_type;
        transaction.amount = amount || transaction.amount;
        transaction.status = status || transaction.status;
        transaction.description = description || transaction.description;

        await transaction.save();

        res.status(200).json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating transaction" });
    }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
    const { transactionid } = req.params;

    try {
        const transaction = await Transaction.findOne({
            where: { transactionid }
        });

        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }

        await transaction.destroy();

        res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting transaction" });
    }
};

module.exports = {
    createTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction
};

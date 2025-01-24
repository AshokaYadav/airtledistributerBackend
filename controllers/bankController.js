const  Bank  = require('../models/Bank'); // Assuming 'Bank' model is exported correctly

// Create a new bank account
const createBankAccount = async (req, res) => {
    try {
        const { accountid, customerName, account_type, balance, account_status, openingDate, lastTransactionDate } = req.body;


        // console.log({accountid,customerName,account_type,balance
        //     ,account_status,openingDate,lastTransactionDate
        // })
        

        const newAccount = await Bank.create({
            accountid,
            customerName,
            account_type,
            balance,
            account_status,
            openingDate,
            lastTransactionDate
        });

        res.status(201).json(newAccount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating bank account" });
    }
};

// Get all bank accounts
const getAllBankAccounts = async (req, res) => {
    try {
        const accounts = await Bank.findAll();
        res.status(200).json(accounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching bank accounts ashoka" });
    }
};

// Get a bank account by ID
const getBankAccountById = async (req, res) => {
    const { accountid } = req.params;

    try {
        const account = await Bank.findOne({
            where: { accountid }
        });

        if (!account) {
            return res.status(404).json({ message: "Bank account not found" });
        }

        res.status(200).json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching bank account" });
    }
};

// Update a bank account by ID
const updateBankAccount = async (req, res) => {
    const { accountid } = req.params;
    const { customerName, account_type, balance, account_status, openingDate, lastTransactionDate } = req.body;

    try {
        const account = await Bank.findOne({
            where: { accountid }
        });

        if (!account) {
            return res.status(404).json({ message: "Bank account not found" });
        }

        account.customerName = customerName || account.customerName;
        account.account_type = account_type || account.account_type;
        account.balance = balance || account.balance;
        account.account_status = account_status || account.account_status;
        account.openingDate = openingDate || account.openingDate;
        account.lastTransactionDate = lastTransactionDate || account.lastTransactionDate;

        await account.save();

        res.status(200).json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating bank account" });
    }
};

// Delete a bank account by ID
const deleteBankAccount = async (req, res) => {
    const { accountid } = req.params;

    try {
        const account = await Bank.findOne({
            where: { accountid }
        });

        if (!account) {
            return res.status(404).json({ message: "Bank account not found" });
        }

        await account.destroy();
        res.status(200).json({ message: "Bank account deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting bank account" });
    }
};

module.exports = {
    createBankAccount,
    getAllBankAccounts,
    getBankAccountById,
    updateBankAccount,
    deleteBankAccount
};

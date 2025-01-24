const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController ')

// Create a new transaction
router.post('/', transactionController.createTransaction);

// Get all transactions for an account
router.get('/account/:accountid', transactionController.getAllTransactions);

// Get a specific transaction by ID
router.get('/:transactionid', transactionController.getTransactionById);

// Update a transaction by ID
router.put('/:transactionid', transactionController.updateTransaction);

// Delete a transaction by ID
router.delete('/:transactionid', transactionController.deleteTransaction);

module.exports = router;

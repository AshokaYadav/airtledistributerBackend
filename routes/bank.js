const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

// Create a new bank account
router.post('/', bankController.createBankAccount);

// Get all bank accounts
router.get('/', bankController.getAllBankAccounts);

// Get a bank account by ID
router.get('/:accountid', bankController.getBankAccountById);

// Update a bank account by ID
router.put('/:accountid', bankController.updateBankAccount);

// Delete a bank account by ID
router.delete('/:accountid', bankController.deleteBankAccount);

module.exports = router;

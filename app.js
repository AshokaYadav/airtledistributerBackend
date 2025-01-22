const express = require('express');
const db = require('./db');  // Import the database connection
const indexRoutes = require('./routes/index');  // Import home route
const userRoutes = require('./routes/users');  // Import users route
const adminRoutes = require('./routes/admin');  // Import admin route
const bankRoutes = require('./routes/bank.js'); 
const transactionsRoutes = require('./routes/transactions.js'); 

const app = express();
const port = 5000; // Port for your Node.js server

// Middleware to use the routes
app.use('/', indexRoutes);  // Home route
app.use('/users', userRoutes);  // Users route
app.use('/admin', adminRoutes);  // Admin route
app.use('/bank', bankRoutes);  // bank route
app.use('/transactions', transactionsRoutes);  // Transaction route


// Start the server
app.listen(port, () => {
  console.log(`Node.js server running at http://localhost:${port}`);
});
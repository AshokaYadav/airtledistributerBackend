const express = require('express');
const app = express();

// Import Routes
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const bankRoutes = require('./routes/bank');
const transactionsRoutes = require('./routes/transactionRoutes');
const indexRoutes = require('./routes/index');

// Database Connection (with Sequelize)
const sequelize = require('./config/config'); // Sequelize configuration

// Middleware to parse JSON data in request bodies
app.use(express.json());

// Use routes for different parts of the app
app.use('/', indexRoutes);  // Home route
app.use('/users', userRoutes);  // Users route
app.use('/admin', adminRoutes);  // Admin route
app.use('/bank', bankRoutes);  // Bank route
app.use('/transactions', transactionsRoutes);  // Transaction route

// Sync Sequelize models with the database
sequelize.sync().then(() => {
    console.log("Database synced!");
}).catch(err => {
    console.log("Error syncing database:", err);
});

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

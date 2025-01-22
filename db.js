const mysql = require('mysql2');

// Create a MySQL connection pool
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Default MySQL user in XAMPP
  password: '',  // Default MySQL password in XAMPP is empty
  database: 'project',  // Your database name
});

// Test the connection
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;  // Export the db connection for use in other files

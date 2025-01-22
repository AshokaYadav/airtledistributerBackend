const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 5000; // Port for your Node.js server

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Default MySQL user in XAMPP
  password: '',  // Default MySQL password in XAMPP is empty
  database: 'project',  // Use your database name
});

// Test the connection
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create a simple API route
app.get('/', (req, res) => {
  res.send('Hello from Node.js server running alongside XAMPP!');
});

// Example MySQL query route
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL: ', err);
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);
    }
  });
});


// Route to get data from the admin table
app.get('/admin', (req, res) => {
  const query = 'SELECT * FROM admin'; // Query to fetch all records from the admin table
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err.message);
      return res.status(500).json({ error: 'An error occurred while fetching data' });
    }
    // Send the result (admin table data) as JSON
    res.json(results);
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Node.js server running at http://localhost:${port}`);
});
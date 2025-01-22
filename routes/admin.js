const express = require('express');
const router = express.Router();
const db = require('../db');  // Import the database connection

// Route to get all admins from the admin table
router.get('/', (req, res) => {
  const query = 'SELECT * FROM admin';  // Query to fetch all records from the admin table
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err.message);
      return res.status(500).json({ error: 'An error occurred while fetching data' });
    }
    // Send the result (admin table data) as JSON
    res.json(results);
  });
});

module.exports = router;  // Export the router for use in server.js

const express = require('express');
const router = express.Router();
const db = require('../db');  // Import the database connection

// Route to get all users from the users table
router.get('/', (req, res) => {
  db.query('SELECT * FROM admin', (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err);
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
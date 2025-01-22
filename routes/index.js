const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.send('Hello from Node.js server running alongside XAMPP!');
});

module.exports = router;  // Export the router for use in server.js

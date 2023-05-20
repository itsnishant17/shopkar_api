const express = require('express');
const router = express.Router();

const users = [];

// Route to add a new user
router.post('/users', (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Check if the username already exists
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  // Create a new user object
  const newUser = {
    username,
    password
  };
  users.push(newUser);

  return res.status(201).json({ message: 'User created successfully' });
});

module.exports = router;

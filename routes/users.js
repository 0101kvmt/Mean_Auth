const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
	res.send('REGISTER');
});

// Register
router.get('/authenticate', (req, res, next) => {
	res.send('AUTHENTICATION');
});

//Profile
router.get('/profile', (req, res, next) => {
	res.send('VALIDATION');
});

module.exports = router;
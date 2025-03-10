const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const rateLimiter = require('../utils/rateLimiter');

router.post('/register', rateLimiter, authController.register);
router.post('/login', rateLimiter, authController.login);
router.post('/logout', authController.logout);

module.exports = router;

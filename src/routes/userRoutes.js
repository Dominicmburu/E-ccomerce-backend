const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const rateLimiter = require('../utils/rateLimiter');

router.get('/:id', authMiddleware, rateLimiter, userController.getUser); 
router.put('/:id', authMiddleware, rateLimiter, userController.updateUser);

module.exports = router;

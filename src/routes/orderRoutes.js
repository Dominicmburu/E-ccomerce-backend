const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, orderController.placeOrder);
router.get('/user/:userId', authMiddleware, orderController.getUserOrders);
router.get('/:id', authMiddleware, orderController.getOrder);

module.exports = router;

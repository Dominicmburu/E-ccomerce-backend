const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:id', productController.getProduct);
router.post('/', authMiddleware, productController.addProduct);
router.put('/:id', authMiddleware, productController.modifyProduct);
router.delete('/:id', authMiddleware, productController.removeProduct); 
module.exports = router;

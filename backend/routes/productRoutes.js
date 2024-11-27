const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// Định nghĩa route để lấy sản phẩm
router.get('/api/products', productController.getProducts);

module.exports = router;

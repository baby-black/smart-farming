const productModel = require('../models/productModel');

// Lấy danh sách sản phẩm
const getProducts = (req, res) => {
  productModel.getAllProducts()
    .then((products) => {
      res.json(products);  // Trả về dữ liệu dưới dạng JSON
    })
    .catch((err) => {
      res.status(500).json({ message: 'Lỗi khi lấy dữ liệu sản phẩm', error: err });
    });
};

module.exports = { getProducts };

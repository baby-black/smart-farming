// server.js
const express = require('express');
const Product = require('./models/Product');
const app = express();
const port = 3000;

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy dữ liệu sản phẩm', error });
  }
});

app.listen(port, () => {
  console.log(`Server đang chạy ở cổng ${port}`);
});

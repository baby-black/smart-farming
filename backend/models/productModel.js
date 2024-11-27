const db = require('../config/db');

// Lấy danh sách sản phẩm từ cơ sở dữ liệu
const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM products', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = { getAllProducts };

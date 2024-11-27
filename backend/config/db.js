// db.js
const { Sequelize } = require('sequelize');

// Tạo kết nối Sequelize với MySQL
const sequelize = new Sequelize('smart_farming', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,  // Tắt logging nếu không cần
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Kết nối MySQL thành công');
  } catch (error) {
    console.error('Không thể kết nối đến MySQL:', error);
  }
})();

module.exports = sequelize;

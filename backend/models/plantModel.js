const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  moistureLevel: { type: Number, required: true },  // Độ ẩm
  temperature: { type: Number, required: true },    // Nhiệt độ
  healthStatus: { type: String, required: true },   // Tình trạng cây (tốt/xấu)
  lastWatered: { type: Date },                      // Lần cuối tưới nước
});

module.exports = mongoose.model('Plant', plantSchema);

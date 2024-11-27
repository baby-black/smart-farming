const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

// Route lấy thông tin cây trồng
router.get('/', plantController.getAllPlants);

// Route lấy thông tin cây trồng theo ID
router.get('/:id', plantController.getPlantById);

// Route cập nhật thông tin cây trồng
router.put('/:id', plantController.updatePlant);

module.exports = router;

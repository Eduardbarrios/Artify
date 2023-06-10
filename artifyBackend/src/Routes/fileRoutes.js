const express = require('express');
const router = express.Router();
const fileController = require('../Controllers/fileController');

// Define a route for getting all products
router.get('/products', fileController.getAllFiles);

module.exports = router;


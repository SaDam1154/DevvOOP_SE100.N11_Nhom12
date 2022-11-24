const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.read);
router.post('/', productController.create);

module.exports = router;
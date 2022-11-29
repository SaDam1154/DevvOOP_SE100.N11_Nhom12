
const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const productTypeRoute = require('./productType');

router.use('/product-type', productTypeRoute);

module.exports = router;
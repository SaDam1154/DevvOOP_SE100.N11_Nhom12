
const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const productTypeRoute = require('./productType');
const customerRoute = require('./customer');

router.use('/product', productRoute);
router.use('/product-type', productTypeRoute);
router.use('/customer', customerRoute);

module.exports = router;
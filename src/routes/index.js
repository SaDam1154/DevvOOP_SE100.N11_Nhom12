const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const productTypeRoute = require('./productType');
const customerRoute = require('./customer');
const orderRoute = require('./order');
const detailOrder = require('./detailOrder');

router.use('/product', productRoute);
router.use('/product-type', productTypeRoute);
router.use('/customer', customerRoute);
router.use('/order', orderRoute);
router.use('/detail-order', detailOrder);

module.exports = router;

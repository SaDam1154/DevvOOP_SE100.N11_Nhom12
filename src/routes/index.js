const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const productTypeRoute = require('./productType');
const customerRoute = require('./customer');
const orderRoute = require('./order');
const detailOrder = require('./detailOrder');
const account = require('./account');
const role = require('./role');

router.use('/product', productRoute);
router.use('/product-type', productTypeRoute);
router.use('/customer', customerRoute);
router.use('/order', orderRoute);
router.use('/detail-order', detailOrder);
router.use('/account', account);
router.use('/role', role);

module.exports = router;

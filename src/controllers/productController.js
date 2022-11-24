const Product = require('../models/Product');

// [GET] api/product
const read = async (req, res, next) => {
    try {
        let products;
        products = await Product.find();
        return res.status(200).json({ success: true, products });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, status: 500, message: 'Internal server error' });
    }
};

// [GET] api/product
const create = async (req, res, next) => {
    const { name, price, type } = req.body;

    // Validate field
    if (!name || !price || !type) {
        return res.status(400).json({ success: false, status: 400, message: 'Missed field' });
    }

    try {
        const newProduct = new Product({
            name,
            price,
            type,
        });
        await newProduct.save();
        return res.status(201).json({ success: true, product: newProduct });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, status: 500, message: 'Internal server error' });
    }
};

module.exports = { read, create };

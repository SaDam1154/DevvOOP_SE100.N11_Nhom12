const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        },
        type: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

ProductSchema.plugin(AutoIncrement, { id: 'products', inc_field: 'id' });

module.exports = mongoose.model('products', ProductSchema);

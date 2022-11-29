const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const ProductTypeSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

ProductTypeSchema.plugin(AutoIncrement, { id: 'product_types', inc_field: 'id' });

module.exports = mongoose.model('product_types', ProductTypeSchema);

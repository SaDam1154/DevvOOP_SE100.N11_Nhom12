const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FunctionSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        displayName: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('functions', FunctionSchema);

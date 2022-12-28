const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Schema.Types.ObjectId,
            ref: 'roles',
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
UserSchema.plugin(AutoIncrement, { id: 'users', inc_field: 'id' });

module.exports = mongoose.model('users', UserSchema);

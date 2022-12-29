const Role = require('../models/Role');
const Permission = require('../models/Permission');
const Function = require('../models/Function');

// [GET] api/role
const read = async (req, res, next) => {
    try {
        let roles;
        roles = await Role.aggregate([{ $match: req.filters }, { $sort: req.sorts }]);
        return res.status(200).json({ success: true, roles });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, status: 500, message: 'Internal server error' });
    }
};

// [POST] api/role
const create = async (req, res, next) => {
    const { name, description } = req.body;
    // Validate field
    if (!name) {
        return res.status(400).json({ success: false, status: 400, message: 'Missed field' });
    }

    try {
        const newRole = new Role({
            name,
            description,
        });
        await newRole.save();
        return res.status(201).json({ success: true, role: newRole });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, status: 500, message: 'Internal server error' });
    }
};

// [GET] api/role/:id
const readOne = async (req, res, next) => {
    const id = req.params.id;
    try {
        let role;
        role = await Role.findOne({ id });

        // Get function
        let permissions;
        permissions = await Permission.find({ role }).populate('function');

        const functions = permissions.map((permission) => {
            return permission.toObject().function;
        });

        return res.status(200).json({ success: true, role: { ...role.toObject(), functions } });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, status: 500, message: 'Internal server error' });
    }
};

// [PUT] api/role/:id
const update = async (req, res, next) => {
    const id = Number(req.params.id);
    const bodyObj = req.body;
    const updateObj = {};

    Object.keys(bodyObj).forEach((key) => {
        if (bodyObj[key] !== undefined) {
            updateObj[key] = bodyObj[key];
        }
    });

    // Update role
    try {
        const newRole = await Role.findOneAndUpdate({ id }, updateObj, {
            new: true,
        });
        return res.status(200).json({ success: true, role: newRole });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, status: 500, message: 'Internal server error' });
    }
};

// [DELETE] api/role/:id
const destroy = async (req, res, next) => {
    if (!req.params.id) {
        return res.status(400).json({ success: false, status: 400, message: 'Missed id' });
    }

    try {
        await Role.delete({ id: req.params.id });
        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, status: 500, message: 'Internal server error' });
    }
};

module.exports = { read, create, readOne, update, destroy };

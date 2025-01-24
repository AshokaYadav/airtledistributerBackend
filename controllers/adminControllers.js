const User = require('../models/Adminn');

// Create a new user
const createUser = async (req, res) => {
    try {
        const { name, mobileno, password } = req.body;
        const user = await User.create({ name, mobileno, password });
        res.status(201).json({ user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update user information
const updateUser = async (req, res) => {
    try {
        const { name, mobileno, password } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        user.name = name || user.name;
        user.mobileno = mobileno || user.mobileno;
        user.password = password || user.password;
        await user.save();
        res.status(200).json({ user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };

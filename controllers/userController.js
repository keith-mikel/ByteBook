const User = require('../models/user');

module.exports = {
    // Get all users
    async getUsers(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    // Get user by ID
    async getUserById(req, res) {
      const { userId } = req.params;
      try {
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    // Create a new user
    async createUser(req, res) {
      const { username, email } = req.body;
      try {
        const user = new User({ username, email });
        await user.save();
        res.status(201).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  };
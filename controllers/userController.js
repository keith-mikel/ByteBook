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

  // Update user by ID
  async updateUserById(req, res) {
    const { userId } = req.params;
    const { username, email } = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { username, email },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    const { userId, friendId } = req.params;

    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const friend = await User.findById(friendId);
      if (!friend) {
        return res.status(404).json({ message: 'Friend not found' });
      }

      // Check if the friend is already in the user's friend list
      if (user.friends.includes(friendId)) {
        return res.status(400).json({ message: 'Friend already in the friend list' });
      }

      user.friends.push(friendId);
      await user.save();

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove a friend from a user's friend list
  async removeFriend(req, res) {
    const { userId, friendId } = req.params;

    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const friend = await User.findById(friendId);
      if (!friend) {
        return res.status(404).json({ message: 'Friend not found' });
      }

      // Check if the friend is in the user's friend list
      if (!user.friends.includes(friendId)) {
        return res.status(400).json({ message: 'Friend not found in the friend list' });
      }

      user.friends = user.friends.filter((friend) => friend.toString() !== friendId);
      await user.save();

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete user by ID
  async deleteUserById(req, res) {
    const { userId } = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

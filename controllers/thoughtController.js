const Thought = require('../models/thought');
const User = require('../models/user');

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single thought by _id
  async getThoughtById(req, res) {
    const { thoughtId } = req.params;
    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a new thought
  async createThought(req, res) {
    const { thoughtText, username, userId } = req.body;
    try {
      const thought = new Thought({ thoughtText, username, userId });
      await thought.save();

      // Push the created thought's _id to the associated user's thoughts array
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.thoughts.push(thought._id);
      await user.save();

      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },



  // Update a thought by _id
  async updateThoughtById(req, res) {
    const { thoughtId } = req.params;
    const { thoughtText } = req.body;
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        { thoughtText },
        { new: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;

    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      const newReaction = {
        reactionBody,
        username,
      };

      thought.reactions.push(newReaction);
      await thought.save();

      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a reaction by reactionId from a thought
  async deleteReaction(req, res) {
    const { thoughtId } = req.params;
    const { reactionId } = req.body;

    try {
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      // Find the index of the reaction to remove by reactionId
      const reactionIndex = thought.reactions.findIndex(
        (reaction) => reaction.reactionId.toString() === reactionId
      );

      if (reactionIndex === -1) {
        return res.status(404).json({ message: 'Reaction not found' });
      }

      // Remove the reaction by its index
      thought.reactions.splice(reactionIndex, 1);
      await thought.save();

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },


  async deleteThought(req, res) {
    try {
      // Get the thought ID from the request parameters
      const { thoughtId } = req.params;
  
      // Use Mongoose's findByIdAndDelete method to delete the thought by its ID
      const deletedThought = await Thought.findByIdAndDelete(thoughtId);
  
      // Check if the thought exists and was successfully deleted
      if (!deletedThought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
  
      // If the thought was successfully deleted, return a success message
      res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

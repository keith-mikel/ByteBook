const express = require('express');
const router = express.Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// Routes for thought CRUD operations
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtById);
router.route('/:thoughtId').put(updateThoughtById);
router.route('/:thoughtId').delete(deleteThoughtById);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/:reactionsId').delete(deleteReaction);

module.exports = router;

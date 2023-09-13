const express = require('express');
const router = express.Router();
const {getUsers, createUser, getUserById} = require('../../controllers/userController');

// Routes for user CRUD operations
router.route('/').get(getUsers).post(createUser)
router.route('/:userId').get(getUserById)

module.exports = router;

const express = require('express');
const router = express.Router();
const user = require('../controllers/user')();

// create user
router.post('/create', user.create);

// get all users
router.get('/retrieveAll', user.retrieveAll);

// get user by ID
router.get('/retrieveById', user.findById);

// update user by ID
router.post('/update', user.update);

// delete user by ID
router.delete('/delete', user.deleteById);

module.exports = router;
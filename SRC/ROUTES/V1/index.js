const userController = require('../../CONTROLLER/user-controller');
const express = require('express');
const router = express.Router();

router.post('/signup', userController.create);
router.post('/signin', userController.signIn);

module.exports = router;
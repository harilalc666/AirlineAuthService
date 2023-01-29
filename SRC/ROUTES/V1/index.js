const userController = require('../../CONTROLLER/user-controller');
const express = require('express');
const router = express.Router();
const {AuthRequestValidators} = require('../../MIDDLEWARES/index');

router.post('/signup',
    AuthRequestValidators.validateUserAuth,
    userController.create
 );

router.post('/signin',
    AuthRequestValidators.validateUserAuth,
    userController.signIn
);

router.get(
    '/isAuthenticated',
    userController.isAuthenticated
)

router.get(
    '/isAdmin',
    AuthRequestValidators.validateRole,
    userController.isAdmin
);

router.get(
    '/isHR',
    AuthRequestValidators.validateRole,
    userController.isHR
);

router.get(
    '/isAccounts',
    AuthRequestValidators.validateRole,
    userController.isAccounts
);

module.exports = router;
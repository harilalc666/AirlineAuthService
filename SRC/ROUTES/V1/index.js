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
    AuthRequestValidators.validateIsAdminRequest,
    userController.isAdmin
);

router.get(
    '/isHR',
    AuthRequestValidators.validateIsAdminRequest,
    userController.isHR
);

router.get(
    '/isAccounts',
    AuthRequestValidators.validateIsAdminRequest,
    userController.isAccounts
);

module.exports = router;
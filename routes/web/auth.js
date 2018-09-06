const express = require('express');
const router = express.Router();
const passport = require('passport');

const loginController = require('./../../http/controllers/auth/loginController');
const registerController = require('./../../http/controllers/auth/registerController');
//show login form
router.get('/login', loginController.showLoginform);
router.post('/login', loginController.processLoginform);

router.get('/register', registerController.showRegisterform);
router.post('/register', registerController.processRegisterform);


module.exports = router;


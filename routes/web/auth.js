const express = require('express');
const router = express.Router();
const passport = require('passport');

const loginController = require('./../../http/controllers/auth/loginController');
const registerController = require('./../../http/controllers/auth/registerController');
const registerValidator=require('./../../http/validations/registerValidation');
//show login form
router.get('/login', loginController.showLoginform);
router.post('/login', loginController.processLoginForm);

router.get('/register', registerController.showRegisterform);
router.post('/register',registerValidator.handle(), registerController.processRegisterform);


module.exports = router;


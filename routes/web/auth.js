const express = require('express');
const router = express.Router();
const passport = require('passport');

const loginController = require('./../../http/controllers/auth/loginController');
//posting form login and process
router.post('/', loginController.processLoginform);
//show login form
router.get('/login',loginController.showLoginform);

module.exports = router;


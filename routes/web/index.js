const express = require('express');
const router = express.Router();

const homeRouter = require('./home');
router.use('/', homeRouter);

const authRouter = require('./auth');
router.use('/auth', authRouter);

module.exports = router;
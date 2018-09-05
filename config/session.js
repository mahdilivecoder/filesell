const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
module.exports = {
    secret: process.env.SESSIONSECRETKEY,
    resave: true,
    cookie: { expires: new Date(Date.now() + 60000) },
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}
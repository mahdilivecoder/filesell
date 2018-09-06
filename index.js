const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const cookieParser = require('cookie-parser');
const validator = require('express-validator');
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const passport = require('passport');
const expressLayouts = require('express-ejs-layouts');
module.exports = class Application {
    constructor() {
        this.setupExpress();
        this.setMongoConnection();
        this.setConfig();
        this.setRoutes();
    }
    setupExpress() {
        let server = http.createServer(app);
        server.listen(config.port, () => {
            console.log(`Server are runnig on port${config.port}`);
        })
    }
    setConfig() {
        require('./passport/passport-local');
        app.use(express.static(config.layout.public_dir));
        app.set('view engine', config.layout.view_engine);
        app.use(expressLayouts);
        app.set('layout extractScripts',true);
        app.set('layout extractStyles',true);
        app.set('views', config.layout.view_dir);
        //body parser
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(validator());
        //session
        app.use(session({ ...config.session }));
        app.use(cookieParser(process.env.COOKIESECRETKEY));
        app.use(flash());
        //passport.js
        app.use(passport.initialize());
        app.use(passport.session());
    }

        setMongoConnection() {
            mongoose.Promise = global.Promise;
            mongoose.connect(config.database.url, { useNewUrlParser: true });
        }

        setRoutes() {
            app.use(require('./routes/web'));
    }
}
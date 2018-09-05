'use strict';
const App = require('./index.js');
require('dotenv').config();
global.config = require('./config');

new App();



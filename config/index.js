const database = require('./database');
const service = require('./service');
const layout = require('./layout');
const session = require('./session');
module.exports = {
    database,
    service,
    layout,
    session,
    port:process.env.port || 3000
}
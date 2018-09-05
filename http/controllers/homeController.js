const controller = require('./controller');

class homeController extends controller {
    index(req, res) {
        res.render('home',{title:'Hello world!'});

    }
}

module.exports = new homeController();

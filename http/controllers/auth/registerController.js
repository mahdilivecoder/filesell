const controller = require('./../controller');


class registerController extends controller {
    showRegisterform(req, res) {
        res.render('register', { title: 'ثبت نام' });
    }
    async processRegisterform(req, res) {
       
    }
}

module.exports = new registerController;

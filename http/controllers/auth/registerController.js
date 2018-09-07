const controller = require('./../controller');

class registerController extends controller {
    showRegisterform(req, res) {
        res.render('ddawa', { title: 'ثبت نام',recaptcha:this.recaptcha.render()});
    }
    async processRegisterform(req, res,next) {
        await this.recaptchaValidation(req,res);
        //vallidation data
        res.redirect('/');
        }
}

module.exports = new registerController;

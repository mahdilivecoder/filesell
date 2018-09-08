const controller = require('./../controller');
const passport=require('passport');
const {validationResult }=require('express-validator/check');
class registerController extends controller {
    showRegisterform(req, res) {
        res.render('ddawa', { title: 'ثبت نام',recaptcha:this.recaptcha.render(),errors:req.flash('errors')});
    }
    async processRegisterform(req, res,next) {
        await this.recaptchaValidation(req, res);
        //vallidation data
        var result = await this.validationData(req);
        if (result) {
            res.redirect('/')
        } else {
            return this.back(req, res);
        }
    }
    async validationData(req,res){
        let result=await validationResult(req);
        if(!result.isEmpty()){
            let errors=result.array();
            let message=[];
            errors.forEach(error=>message.push(error.msg));
            req.flash('errors',message);

        }
    }
}

module.exports = new registerController;

﻿const autoBind = require('auto-bind');
const Recaptcha =require('express-recaptcha').Recaptcha;
module.exports=class controller {
    constructor() {
        autoBind(this);
        this.recaptchaConfig();
    }

    recaptchaConfig(){
        this.recaptcha=new Recaptcha(
            config.service.recaptcha.client_key,
            config.service.recaptcha.secret_key,
            {...config.service.recaptcha.options});
    }

    recaptchaValidation(req,res){
        return new Promise((resolve,reject)=>{
        this.recaptcha.verify(req,(err,data)=>{
            if(err){
                req.flash('errors',"متاسفیم گزینه امنیتی را دوباره چک کنید.!");
                this.back(req,res);
            }else{
                resolve(true);
            }
        })
        })
    }
    back(req,res){
        return res.redirect(req.header('Referer') || '/');
    }

}
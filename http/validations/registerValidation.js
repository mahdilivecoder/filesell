const validation=require('./validation');
const {check}=require('express-validator/check');
class registerValidation extends validation{
handle(){
    return[
        check('username').trim().isLength({min:5}).withMessage('نام کاربری نمی تواند کمتر از 5 کاراکتر باشد.!').
        not().isEmpty().withMessage('نام کاربری نمی تواند خالی باشد.'),
        check('codemeli').trim().not().matches('\d(a{9})','codemeli').withMessage('کد ملی باید 9 رقم باشد').
            not().isEmpty().withMessage('کد ملی نمی تواند خالی باشد'),
        check('phonenumber').trim().not().isEmpty().withMessage('شماره تلفن نمی تواند خالی باشد.!'),
        check('email').trim().isEmail().withMessage('فرمت ایمیل صحیح نمی باشد.!').
            not().isEmpty().withMessage('ایمیل نمی تواند خالی باشد.!'),
        check('password').trim().isLength({min:8,max:24}).withMessage('پسورد باید بیشتر از 8 کاراکتر و کمتر از 24 کاراکتر باشد').
            not().isEmpty().withMessage('پسورد نمی تواند خالی باشد')
    ]
}
}


module.exports=new registerValidation();
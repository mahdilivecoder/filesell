const controller = require('./../controller');


class loginController extends controller {
    processLoginform(req, res) {
        //vorod be system
        let userandpass=[req.body.username,req.body.password];
        userandpass.forEach(data=>{
            res.send(data);
        });
    }
    showLoginform(req,res){
        res.render('login',{title:'ورود به سیستم'});
    }
}

module.exports = new loginController;

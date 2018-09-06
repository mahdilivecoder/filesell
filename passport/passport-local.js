
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('./../models/user');


passport.serializeUser(function (user, done) {
    done(null, user.id);
});


passport.deserializeUser(function (id, done) {
    User.findByid(id, function (err, user) {
        done(err, user);
    });
});

passport.use('local.register', new localStrategy({
    usernameField: 'email',
    codemeliField: 'codemeli',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, codemeli, done) {
    User.findOne({ 'email': email }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, req.flash(errors, "متاسفیم ایمیل وارد شده از قبل در سایت وجود دارد!"));
        } else {
            User.findOne({ 'codemili': codemeli }, function (err, user) {
                if (err) return done(err);
                if (user) return done(null, false, req.flash(errors, "متاسفیم کد ملی وارد شده از قبل در سایت وجود دارد.!"));
                const newUser = new User({
                    name: req.body.name,
                    phonenumber: req.body.phonenumber,
                    email,
                    codemeli,
                    password
                })
                newUser.save(function (err) {
                    if (err) throw new err;
                    return done(null, newUser);
                })
            })
         
        }
       

   
    })

}
))
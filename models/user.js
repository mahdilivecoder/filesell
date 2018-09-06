const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: { type: String, required: true, lowercase: true, unique: true },
    codemeli: { type: Number, unique: true,required:true},
    phonenumber: { type: Number, unique: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
    remembertoken: { type: String, default: null}
}, { timestamps: true })

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, bcrypt.genSalt(15), function (err, hash) {

        if (err) throw new err;
        if (hash) {
            this.password = hash;
            next();
        }
    })

})
module.exports = mongoose.model('User', userSchema);



const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT = 10;

const userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            unique: true
        },
        username: {
            type: String,
            unique: true
        },
        morals: Array,
        history: Array,
        password: String
    }
)

/*  Hash user password before saving  */
userSchema.pre('save', function(next) {
    const user = this;
    // Create salt string
    bcrypt.genSalt(SALT, function(err, salt) {
        // If err, return
        if(err) return next(err);
        // Hash password and save
        bcrypt.hash(user.password, salt, function(err, hash){
            // If err, return
            if(err) return next(err);
            user.password = hash;
            next(); // Proceed with the next operation
        });
    });
});

/*  Compare login password with user's password from the database  */
userSchema.methods.comparePassword = function(loginPass, callBack) {
    // Use bcrypt to compare and decrypt password in the db.
    bcrypt.compare(loginPass, this.password, function(err, isMatch){
        // If err, then return the error
        if(err) return callBack(err);
        // Return isMatch parameter (true or false)
        callBack(null, isMatch);
    });
}

const User = mongoose.model('User', userSchema)

module.exports = User;

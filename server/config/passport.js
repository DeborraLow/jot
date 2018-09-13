const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = function (passport) {

    passport.use(new LocalStrategy(function(username, password, next){
        User.findOne({ username }, (err, foundUser) => {
            if (err) {
                next(err);
                return;
            }

            if (!foundUser) {
                next(null, false, { message: 'Incorrect username' });
                return;
            }

            if (!bcrypt.compareSync(password, foundUser.password)) {
                next(null, false, { message: 'Incorrect password' });
                return;
            }

            next(null, foundUser);
        });
    }));

    passport.serializeUser(function(loggedInUser, cb){
        cb(null, loggedInUser._id);
    });

    passport.deserializeUser(function(userIdFromSession, cb){
        User.findById(userIdFromSession, function(err, userDocument){
            if (err) {
                cb(err);
                return;
            }
            cb(err, userDocument);
        });
    });

}
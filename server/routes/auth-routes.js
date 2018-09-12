const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

// Our user model
const User = require('../models/user');

const authRoutes = express.Router();

authRoutes.post('/api/signup/:id', (req, res, next) => {

    const { avatar, first_name, last_name } = req.body;

    if (avatar === '') {
        res.status(400).json({ message: 'Please upload your avatar to continue.' });
        return;
      }else if(first_name === '' || last_name === ''){
        res.status(400).json({ message: 'First and last name is required to proceed.' });
        return;
      }else{

        User.findByIdAndUpdate(req.params.id, {avatar, first_name, last_name})
        .then(entry => {
            res.json({
                message: 'Account has been updated successfully'
            });
        })
        .catch(error => next(error))
        
      }
})

authRoutes.post('/api/signup', (req, res, next) => {
    const { username, password, confirm_password, email } = req.body

    if (!username || !password || !confirm_password || !email) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }
    if(password !== confirm_password){
        res.status(400).json({ message: 'Password mismatch.' });
        return;
    }
    User.findOne({ username }, '_id', (err, foundUser) => {
        if (foundUser) {
            res.status(400).json({ message: 'The username already exists' });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const theUser = new User({
            username,
            password: hashPass,
            email,
        });

        theUser.save((err) => {
            if (err) {
                res.status(400).json({ message: 'Something went wrong' });
                return;
            }

            req.login(theUser, (err) => {
                if (err) {
                    res.status(500).json({ message: 'Something went wrong' });
                    return;
                }
                res.status(200).json(req.user);
            });
        }
        );
    });
});

authRoutes.post('/api/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong' });
            return;
        }

        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }

        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Something went wrong' });
                return;
            }
            req.session.timestamp = new Date();
            req.session.save(function(){
                res.status(200).json(req.user);
            });
            
        });
    })(req, res, next);
});

authRoutes.get('/api/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Success' });
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated())
      return next();
    else
      res.status(403).json({ message: 'Unauthorized' });
}

authRoutes.get('/api/isloggedin', ensureAuthenticated, (req, res) => {
    res.status(200).json(true);
    return;
});

authRoutes.get('/private', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.json({ message: 'This is a private message' });
        return;
    }

    res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authRoutes;

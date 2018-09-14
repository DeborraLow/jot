const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const uploadCloud = require('../config/cloudinary.js');

const User = require('../models/user');


/* Get MY ID */
router.get('/user/me', (req, res, next) => {
    if(req.user){
        res.status(200).json({ id:req.user._id });
    }else{
        res.status(400).json({ message: 'Unauthorized' });
    }
});

/* GET a single User. */
router.get('/user/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    User.findById(req.params.id)
        .then(theUser => {
            res.json(theUser);
        })
        .catch(error => next(error))
});

/* EDIT a User Profile. */
router.put('/user/:id',
    // uploadCloud.single('photo'), 
    (req, res, next) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json({ message: 'Specified id is not valid' });
            return;
        }
        const updates = {
            password,
            email,
            firstName,
            lastName,
            penName,
            entries,
            friends,
            // avatarName,
            avatarPath,
        } = req.body;

        User.findByIdAndUpdate(req.params.id, updates)
            .then(user => {
                res.json({
                    message: 'User has been updated successfully'
                });
            })
            .catch(error => next(error))
    })

/* DELETE an User. */

router.delete('/user/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    User.remove({ _id: req.params.id })
        .then(message => {
            return res.json({
                message: 'User has been removed!'
            });
        })
        .catch(error => next(error))
});


module.exports = router;

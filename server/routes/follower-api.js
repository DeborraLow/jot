const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Follower = require('../models/follower')

router.get('/followers', (req, res, next) => {
    Follower.find()
        .then((followerList, err) => {
            if (err) {
                res.json(err);
                return;
            }
            res.json(followerList);
        })
        .catch(error => next(error))
});

module.exports = router;
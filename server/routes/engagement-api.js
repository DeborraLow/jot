const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Engagement = require('../models/engagement')

router.get('/engagements', (req, res, next) => {
    Engagement.find()
        .then((engagementList, err) => {
            if (err) {
                res.json(err);
                return;
            }
            res.json(engagementList);
        })
        .catch(error => next(error))
});

module.exports = router;
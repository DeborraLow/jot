const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Emoji = require('../models/emoji');

/* GET all Emojis listing. */

router.get('/emojis', (req, res, next) => {
    Emoji.find()
        .then((emojiList, err) => {
            if (err) {
                res.json(err);
                return;
            }
            res.json(emojiList);
        })
        .catch(error => next(error))
});

module.exports = router;
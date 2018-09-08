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

/* CREATE a new Emoji. */
router.post('/emojis', (req, res, next) => {
    const theEmoji = new Emoji({
        name,
        url
    } = req.body);

    theEmoji.save()
        .then(theEmoji => {
            res.json({
                message: 'New Emoji created!',
                id: theEmoji._id
            })
        })
        .catch(error => next(error))
})

module.exports = router;
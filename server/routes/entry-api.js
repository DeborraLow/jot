const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const uploadCloud = require('../config/cloudinary.js');

const Entry = require('../models/entry');

/* GET Entry listing. */
router.get('/entries', (req, res, next) => {
    Entry.find()
        .then((entryList, err) => {
            if (err) {
                res.json(err);
                return;
            }
            res.json(entryList);
        })
        .catch(error => next(error))
});


/* CREATE a new Entry. */
router.post('/entries',
    //  uploadCloud.single('photo'), 
    (req, res, next) => {
        console.log("Req, Res");
        const theEntry = new Entry({
            title,
            summary,
            entry_text,
            publish_date,
            isPublic,
            permitted_followers,
            emojis,
            comments,
            user,
            // imgPath = req.file.url,
            // imgName = req.file.originalname,
            likes
        } = req.body);

        theEntry.save()
            .then(theEntry => {
                res.json({
                    message: 'New Entry created!',
                    id: theEntry._id
                });
            })
            .catch(error => next(error))
    });

/* GET a single Entry. */
router.get('/entries/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Entry.findById(req.params.id)
        .then(theEntry => {
            res.json(theEntry);
        })
        .catch(error => next(error))
});

/* EDIT an Entry. */
router.put('/entries/:id',
    // uploadCloud.single('photo'), 
    (req, res, next) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json({ message: 'Specified id is not valid' });
            return;
        }

        const updates = {
            title,
            summary,
            entry_text,
            publish_date,
            isPublic,
            permitted_followers,
            emojis,
            comments,
            // imgName,
            // imgPath,
        } = req.body;

        Entry.findByIdAndUpdate(req.params.id, updates)
            .then(entry => {
                res.json({
                    message: 'Entry has been updated successfully'
                });
            })
            .catch(error => next(error))
    })

/* DELETE an Entry. */

router.delete('/entries/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Entry.remove({ _id: req.params.id })
        .then(message => {
            return res.json({
                message: 'Entry has been removed!'
            });
        })
        .catch(error => next(error))
});


module.exports = router;

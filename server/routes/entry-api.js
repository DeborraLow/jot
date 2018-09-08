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

            const entries = entryList.map(e=> {
                return {
                    id:e._id, 
                    title:e.title, 
                    summary:e.summary,
                    emojis:e.emojis,
                    isPublic:e.isPublic,
                    likes:e.likes,
                    publish_date:e.publish_date
                }
            })
            res.json(entries);
        })
        .catch(error => next(error))
});


/* CREATE a new Entry. */
router.post('/entries', (req, res, next) => {
        
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
            likes
        } = req.body);

        theEntry.save()
            .then(theEntry => {
                res.json({
                    id: theEntry._id,
                    title: theEntry.title
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

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const uploadCloud = require('../config/cloudinary.js');

const Entry = require('../models/entry');
const DateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
/* GET Entry listing. */
router.get('/entries', (req, res, next) => {
    Entry.find().sort('-created_at')
        .then((entryList, err) => {
            if (err) {
                res.json(err);
                return;
            }

            const entries = entryList.map(e=> {
                return {
                    id:e._id, 
                    title:e.title, 
                    entry_text:e.entry_text,
                    emojis:e.emojis,
                    isPublic:e.isPublic,
                    likes:e.likes,
                    publish_date:new Date(e.publish_date).toLocaleDateString("en-US",DateOptions),
                    created_at:new Date(e.created_at).toLocaleDateString("en-US",DateOptions),
                    status:e.status
                }
            })
            res.json(entries);
        })
        .catch(error => next(error))
});


/* CREATE a new Entry. */
router.post('/entries', (req, res, next) => {
        const created_at = new Date().toLocaleDateString("en-US",DateOptions)

        const theEntry = new Entry({
            title:`Draft - ${created_at}`,
        });

        theEntry.save()
            .then(e => {
                console.log(e)
                const entries = {
                    id:e._id, 
                    title:e.title, 
                    created_at:new Date(e.created_at).toLocaleDateString("en-US",DateOptions),
                    status:e.status,
                }

                res.json(entries);
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
        } = req.body;
        updates.publish_date = new Date();
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

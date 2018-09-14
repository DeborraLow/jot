const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const uploadCloud = require('../config/cloudinary.js');

const Entry = require('../models/entry');
const DateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const Engagement = require('../models/engagement')

/* GET Entry listing. */
router.get('/entries', (req, res, next) => {
    Entry.find().sort('-created_at')
        .populate("emojis")
        .populate("engagement")
        .then((entryList, err) => {
            if (err) {
                res.json(err);
                return;
            }

            const entries = entryList.map(e => {
                return {
                    id: e._id,
                    title: e.title,
                    entry_text: e.entry_text,
                    emojis: e.emojis,
                    isPublic: e.isPublic,
                    likes: e.likes,
                    engagement: e.engagement,
                    publish_date: new Date(e.publish_date).toLocaleDateString("en-US", DateOptions),
                    created_at: new Date(e.created_at).toLocaleDateString("en-US", DateOptions),
                    status: e.status
                }
            })
            res.json(entries);
        })
        .catch(error => next(error))
});

/* GET Entry by User listing. */
router.get('/profile', (req, res, next) => {
    const entryUser = req.session.passport.user;

    console.log("USER", entryUser)

    Entry.find({ user: entryUser }).sort('-created_at')
        .populate("emojis")
        .populate("engagement")
        .then((entryList, err) => {
            if (err) {
                res.json(err);
                return;
            }

            const entries = entryList.map(e => {
                return {
                    id: e._id,
                    title: e.title,
                    entry_text: e.entry_text,
                    emojis: e.emojis,
                    isPublic: e.isPublic,
                    likes: e.likes,
                    engagement: e.engagement,
                    publish_date: new Date(e.publish_date).toLocaleDateString("en-US", DateOptions),
                    created_at: new Date(e.created_at).toLocaleDateString("en-US", DateOptions),
                    status: e.status
                }
            })
            res.json(entries);
        })
        .catch(error => next(error))
});

/* GET all PUBLIC Entry for Explorer page. */
router.get('/public', (req, res, next) => {
    // const entryUser = req.session.passport.user;

    Entry.find({ isPublic: true }).sort('-created_at')
        .populate("emojis")
        .populate("engagement")
        .then((entryList, err) => {
            if (err) {
                res.json(err);
                return;
            }

            const entries = entryList.map(e => {
                return {
                    id: e._id,
                    title: e.title,
                    entry_text: e.entry_text,
                    emojis: e.emojis,
                    isPublic: e.isPublic,
                    likes: e.likes,
                    engagement: e.engagement,
                    publish_date: new Date(e.publish_date).toLocaleDateString("en-US", DateOptions),
                    created_at: new Date(e.created_at).toLocaleDateString("en-US", DateOptions),
                    status: e.status
                }
            })
            res.json(entries);
        })
        .catch(error => next(error))
});

/* CREATE a new Entry. */
router.post('/entries', (req, res, next) => {
    const created_at = new Date().toLocaleDateString("en-US", DateOptions)
    // const user = req.user._id;
    var EntryID = mongoose.Types.ObjectId();

    const entryEngagement = new Engagement({
        entryId: EntryID,
        like: {
            total: 0,
            user: []
        },
        share: {
            total: 0,
            user: []
        }
    })

    entryEngagement.save((err) => {
        if (err) {
            res.status(400).json({ message: 'Something went wronh!' });
            return;
        }
    }).then(engagement => {

        const theEntry = new Entry({
            _id: EntryID,
            title: `Draft - ${created_at}`,
            user: req.session.passport.user,
            engagement: engagement._id
        });

        theEntry.save().then(e => {

            const entries = {
                id: e._id,
                title: e.title,
                created_at: new Date(e.created_at).toLocaleDateString("en-US", DateOptions),
                status: e.status,
                engagement: e.engagement
            }

            res.json(entries);

        }).catch(error => next(error))

    }).catch(error => next(error))

});

/* GET a single Entry. */
router.get('/entries/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Entry.findById(req.params.id)
        .populate("emojis")
        .then(theEntry => {
            res.json(theEntry);
        })
        .catch(error => next(error))
});

/* EDIT an Entry. */
router.put('/entry/:id',
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


/* EDIT the LIKES in an Entry. */

router.put('/likes/:id', (req, res, next) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Engagement.findOne({ entryId: req.params.id }, (err, engagement) => {

        if (err) {
            res.status(400).json({ message: 'Something went wronh!' });
            return;
        }
        const entryUser = req.session.passport.user;

        console.log("USER for Likes", entryUser)

        const check = engagement.like.user.find(i => String(i) === String(req.user._id));

        if (check) {
            const newTotal = engagement.like.total - 1;
            Engagement.update({ entryId: req.params.id }, { $set: { 'like.total': newTotal }, $pull: { 'like.user': req.user._id } }, (err, data) => {
                if (err) {

                    res.status(400).json({ message: 'Something went wronh!' });
                    return;
                }
                res.status(200).json({ message: 'Success!' });
            })
        } else {
            const newTotal = engagement.like.total + 1;
            Engagement.update({ entryId: req.params.id }, { $set: { 'like.total': newTotal }, $push: { 'like.user': req.user._id } }, (err, data) => {
                if (err) {
                    console.log(err)
                    res.status(400).json({ message: 'Something went wronh!' });
                    return;
                }

                res.status(200).json({ message: 'Success' });
            })
        }

    })

})


module.exports = router;

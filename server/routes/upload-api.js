const express = require('express');
var fs = require('fs');
const router = express.Router();
const mongoose = require('mongoose');

/* GET all Emojis listing. */

router.post('/upload', (req, res, next) => {
    req.pipe(fs.createWriteStream('./uploads'));
    req.on('end', next);
});


module.exports = router;
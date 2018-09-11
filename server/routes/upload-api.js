const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/avatars/')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload   = multer({ storage });


router.post('/upload', upload.single('file'), function (req, res) {
    res.status(201).json({path:`/uploads/avatars/${req.file.filename}`})
})


module.exports = router;
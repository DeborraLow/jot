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

const upload = multer({
  storage
});

const uploadEntry = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/uploads/entry/')
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
  })
});

router.post('/upload', upload.single('file'), function (req, res) {
  res.status(201).json({
    path: `/uploads/avatars/${req.file.filename}`
  })
})

router.post('/upload/entry', uploadEntry.single('file'), function (req, res) {
  console.log(req.file)
  res.status(201).json({
    path: `/uploads/entry/${req.file.filename}`
  })
})


module.exports = router;
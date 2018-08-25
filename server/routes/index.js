const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
  console.log("hi from jot");
});

module.exports = router;

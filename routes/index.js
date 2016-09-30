var express = require('express');
var router = express.Router();


/* GET home page. */
/* Pass information to the home page */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Dusome Family',
    message: 'Click the links above to learn about my family!'
  });
});

//user selects emily
router.get('/emily', function(req, res, next) {
  res.render('emily', {
    title: 'Emily',
    message: 'Emily is the middle child in the family. She likes country music and boring things... Jk ;)'
  });
});

//user selects carly
router.get('/carly', function(req, res, next) {
  res.render('carly', {
    title: 'Carly',
    message: 'Carly is the youngest child in the family. She likes leaving messes all over the house!'
  });
});

//user selects paul
router.get('/paul', function(req, res, next) {
  res.render('paul', {
    title: 'Paul',
    message: 'Paul is the Father of the family. He likes working all the time, and boating.'
  });
});

//user selects kelly
router.get('/kelly', function(req, res, next) {
  res.render('kelly', {
    title: 'Kelly',
    message: 'Kelly is the Mother of the family. She likes copious amounts of salt on her food, and playing on her tablet.'
  });
});

//user selects josh
router.get('/josh', function(req, res, next) {
  res.render('josh', {
    title: 'Josh',
    message: 'Josh is the oldest child in the family. He likes yoga, gaming, and music.'
  });
});
module.exports = router;

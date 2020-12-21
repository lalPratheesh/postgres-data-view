var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/csvupload_csvfiledata', function(req, res, next) {
  res.render('index', { table: 'csvupload_csvfiledata' });
});

router.get('/csvupload_uploadnew', function(req, res, next) {
  res.render('index', { table: 'csvupload_uploadnew' });
});

module.exports = router;

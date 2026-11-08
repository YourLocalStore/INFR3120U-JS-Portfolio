var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Home Page' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('pages/index', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('pages/index', { title: 'Projects' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/index', { title: 'Contact Me' });
});

module.exports = router;

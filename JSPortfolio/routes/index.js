var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Joshua' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'Projects' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact Me' });
});

module.exports = router;

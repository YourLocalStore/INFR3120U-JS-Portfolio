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

/* GET sms page. */
router.get('/sms', function(req, res, next) {
  res.render('pages/sms', { title: 'SMS' });
});

/* GET pktracer page. */
router.get('/pktracer', function(req, res, next) {
  res.render('pages/pktracer', { title: 'PKTracer' });
});

/* GET multithread page. */
router.get('/multithread', function(req, res, next) {
  res.render('pages/multithread', { title: 'Multithread' });
});

/* GET fibonacci page. */
router.get('/fibonacci', function(req, res, next) {
  res.render('pages/fibonacci', { title: 'Fibonacci' });
});

/* GET homelab page. */
router.get('/homelab', function(req, res, next) {
  res.render('pages/homelab', { title: 'Homelab' });
});

/* GET rhythmcs page. */
router.get('/rcs', function(req, res, next) {
  res.render('pages/rcs', { title: 'RhythmCS' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

const about = require('../controllers/about');
const admin = require('../controllers/admin');
const blog = require('../controllers/blog');
const index = require('../controllers/index');
const works = require('../controllers/works');
const login = require('../controllers/login');

/* console.log('hello from router'); */

var isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  };

router.get('/', index.main);
router.get('/index', index.index);
router.get('/admin', isAuthenticated, admin.index);
router.get('/blog', blog.index);
router.get('/about', about.index);
router.get('/works', works.index);
router.get('/login', login.login);
router.post('/login', login.auth);

/* router.post('/mail', Home.sendEmail);
router.get('/blog', blog);
router.get('/login', Login.login);
router.post('/login', Login.auth);
router.get('/admin', Admin.admin); */

module.exports = router;
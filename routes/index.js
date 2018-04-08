const express = require('express');
const router = express.Router();

const about = require('../controllers/about');
const admin = require('../controllers/admin');
const blog = require('../controllers/blog');
const index = require('../controllers/index');
const works = require('../controllers/works');

console.log('hello from router');

router.get('/', index.main);
router.get('/index', index.index);
router.get('/admin', admin.index);
router.get('/blog', blog.index);
router.get('/about', about.index);
router.get('/works', works.index);

/* router.post('/mail', Home.sendEmail);
router.get('/blog', blog);
router.get('/login', Login.login);
router.post('/login', Login.auth);
router.get('/admin', Admin.admin); */

module.exports = router;
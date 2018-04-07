const express = require('express');
const router = express.Router();

const Home = require('../controllers/home');
const Blog = require('../controllers/blog');
const Login = require('../controllers/login');
const Admin = require('../controllers/admin');

router.get('/', Home.index);
/* router.post('/mail', Home.sendEmail);

router.get('/blog', blog);

router.get('/login', Login.login);
router.post('/login', Login.auth);

router.get('/admin', Admin.admin); */

module.exports = router;
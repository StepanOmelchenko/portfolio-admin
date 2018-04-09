const express = require('express');
const router = express.Router();

const admin = require('../controllers/admin');

console.log('hello from api router');

var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({message: 'Unauthorized', error: 401})
};

router.get('/admin', admin.getSkills);
router.post('/admin', isAuthenticated, admin.setSkills);

router.get('*', (req, res) => {
  res.status(404).json({msg: 'Not found', err: 404});
})

module.exports = router;
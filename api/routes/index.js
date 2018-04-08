const express = require('express');
const router = express.Router();

const admin = require('../controllers/admin');

router.get('/admin', admin.getSkills);
router.post('/admin', admin.setSkills);

router.get('*', (req, res) => {
  res.status(404).json({msg: 'Not found', err: 404});
})

module.exports = router;
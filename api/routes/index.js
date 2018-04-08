const express = require('express');
const router = express.Router();

const admin = require('../controllers/admin');
/* const ctrlAvatar = require('../controllers/avatar'); */

router.get('/admin', admin.getSkills); // READ
/* router.post('/blog', ctrlBlog.createArticle); // CREATE
router.put('/blog/:id', ctrlBlog.editArticle); // EDIT
router.delete('/blog/:id', ctrlBlog.deleteArticle); // DELETE */

/* router.get('/avatar', ctrlAvatar.getAvatar);
router.post('/avatar', ctrlAvatar.setAvatar); */

router.get('*', (req, res) => {
  res.status(404).json({msg: 'Not found', err: 404});
})

module.exports = router;
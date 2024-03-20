const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');

router.get('/', UserController.index);
router.post('/result', UserController.viewResultPage);

module.exports = router;

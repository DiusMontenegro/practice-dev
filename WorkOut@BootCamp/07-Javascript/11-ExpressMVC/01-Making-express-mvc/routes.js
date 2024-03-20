const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');

router.get('/', UserController.index);
router.get('/login', UserController.viewLoginPage);
router.get('/register', UserController.viewRegisterPage);
router.get('/logoff', UserController.processLogoff);

module.exports = router;

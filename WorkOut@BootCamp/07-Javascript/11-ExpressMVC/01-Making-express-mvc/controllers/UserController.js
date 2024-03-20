const UserModel = require('../models/UserModel');

class UserController {
    index(req, res) {
        res.render('index');
    }

    viewLoginPage(req, res) {
        res.render('login');
    }

    viewRegisterPage(req, res) {
        res.render('register');
    }

    processLogoff(req, res) {
        // Logic to process logoff
    }
}

module.exports = new UserController();

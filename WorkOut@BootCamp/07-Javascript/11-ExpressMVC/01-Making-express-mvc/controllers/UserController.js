const UserModel = require('../models/UserModel');

class UserController {
    index(req, res) {
        res.render('index');
    }

    viewResultPage(req, res) {
        res.render('result', { data: req.body });
    }
}

module.exports = new UserController();

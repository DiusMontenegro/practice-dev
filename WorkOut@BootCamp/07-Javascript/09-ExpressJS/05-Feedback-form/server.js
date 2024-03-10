// require express
const express = require('express');
const session = require('express-session');
// path module -- try to figure out where and why we use this
const path = require('path');
// create the express app
const app = express();
const bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, './public')));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/result', function (req, res) {
    res.redirect('/');
});

// post route for adding a user
app.post('/result', function (req, res) {
    const post = req.body;

    res.render('result', {data: post});
});
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log('listening on port 8000');
});

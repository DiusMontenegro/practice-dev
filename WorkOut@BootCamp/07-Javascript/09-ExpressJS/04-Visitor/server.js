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

app.use(
    session({
        secret: 'sikrit1234',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 },
    })
);

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function (req, res) {
    let visitor = { count: 1, message: ''};

    if (!req.session.count) {
        req.session.count = visitor.count;
    } else {
        if (!req.session.repeatClicked) {
            req.session.count++;
        }
        req.session.repeatClicked = false;
    }

    if (req.session.count % 2 === 0) {
        req.session.message = "Even flowers need rain";
    } else {
        req.session.message = "Beat the odds";
    }

    res.render('index', { session: req.session });
});

app.post('/users', function (req, res) {
    if (req.body.reset === 'Reset') {
        req.session.destroy();
    } else if (req.body.repeat === 'Repeat') {
        req.session.repeatClicked = true;
    }

    res.redirect('/');
});

// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log('listening on port 8000');
});

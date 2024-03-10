// require express
const express = require('express');
const session = require('express-session');
// path module -- try to figure out where and why we use this
const path = require('path');
// create the express app
const app = express();
const bodyParser = require('body-parser');
const { name } = require('ejs');
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
    let count = 10
    if (!req.session.count) {
        req.session.count = count;
    } else {
        req.session.count --;
    }

    res.render('index', {count: req.session});
});

app.get('/set', function (req, res) {
    req.session.destroy();
    res.redirect('/');
})

app.get('/coupon', function (req, res) {
    req.session.destroy();
    res.redirect('/');
})

// post route for adding a user
app.post('/coupon', function (req, res) {
    if (req.body.name === '') {
        req.session.destroy();
        return res.redirect('/');
    }

    const data = {
        'discount': "50% Discount",
        'ticket': Math.floor(Math.random() * 9000000) + 1000000
    }

    if (req.session.count <= 0) {
        data.discount = 'Sorry',
        data.ticket = 'Unavailable'
    }

    req.session.data = data;
    res.render('coupon', { data: req.session.data });
});

app.post('/set', function (req, res) {
    // Check if the session and count exist, and if yes, decrement the count

    // Check if the 'reset' parameter is present and equal to 'Reset count'
    if (req.body.reset === 'Reset count') {
        // Destroy the session and redirect to the root URL
        req.session.destroy();
        return res.redirect('/');
    }

    // Redirect to the root URL
    res.redirect('/');
});
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log('listening on port 8000');
});

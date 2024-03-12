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
app.use(express.static(path.join(__dirname, './static')));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function (req, res) {
    res.render('index', );
});
// post route for adding a user
app.post('/users', function (req, res) {
    console.log('POST DATA', req.body);
    // This is where we would add the user to the database
    // Then redirect to the root route
    res.redirect('/', );
});

//axios
const axios = require('axios');
const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'; // Replace with your actual API URL

app.get('/people', async function(req, res){
    try {
        // use the axios .get() method - provide a url and chain the .then() and .catch() methods
        const response = await axios.get(apiUrl);

        // log the data before moving on!
        console.log(response.data);

        // rather than rendering, just send back the json data!
        res.json(response.data);
    } catch (error) {
        // log the error before moving on!
        console.error(error);
        res.json(error);
    }
});


// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log('listening on port 8000');
});

const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const axios = require('axios');

const cryptoUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';
const finance_platformsUrl = 'https://api.coingecko.com/api/v3/asset_platforms';
const exchangesUrl = 'https://api.coingecko.com/api/v3/exchanges';
// static content
app.use(express.static(path.join(__dirname, './public')));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', async function(req, res){
    res.render('index');
});

app.get('/finance_platforms', async function(req, res){
    res.render('finance_platforms');
});

app.get('/exchanges', async function(req, res){
    res.render('exchanges');
});

app.get('/crypto_API', async function(req, res) {
    try {
        // use the axios .get() method - provide a url and chain the .then() and .catch() methods
        const response = await axios.get(cryptoUrl);
        res.json(response.data)
    } catch (error) {
        // log the error before moving on!
        console.error(error);
        res.json(error);
    }
})

app.get('/finance_platforms_API', async function(req, res){
    try {
        // use the axios .get() method - provide a url and chain the .then() and .catch() methods
        const response = await axios.get(finance_platformsUrl);
        res.json(response.data);
        // res.render('finance_platforms', { data: data});
    } catch (error) {
        // log the error before moving on!
        console.error(error);
        res.json(error);
    }
});

app.get('/exchanges_API', async function(req, res){
    try {
        // use the axios .get() method - provide a url and chain the .then() and .catch() methods
        const response = await axios.get(exchangesUrl);
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

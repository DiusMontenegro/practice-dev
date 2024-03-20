const express = require('express');
const router = express();
const CarsController = require('./controllers/CarsController');
const config = require('./config');
const mysql = require('mysql2');

// MySQL Connection
const connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

router.get('/', (req, res) => {
    const carsController = new CarsController(connection);
    carsController.index(req, res);
});

router.get('/reset', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;

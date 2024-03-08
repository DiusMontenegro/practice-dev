'use strict';
let express = require('express');
let app = express();

app.use(express.static(__dirname + '/assets'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function (request, response){
    response.render('index');
})

app.get("/movies", function (request, response){
    response.render('movies');
})

app.get("/theatres", function (request, response){
    response.render('theatres');
})

app.get("/movies/new", function (request, response){
    response.render('new-movies');
})

app.listen(8000, () => {
    console.log('Listening in port 8080');
})

'use strict';
let express = require('express');
let app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // hard-coded user data
    const users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.listen(8080, () => {
    console.log('Listening in port 8080');
})

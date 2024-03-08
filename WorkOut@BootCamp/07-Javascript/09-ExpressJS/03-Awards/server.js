const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/awards', (request, response) => {
    response.render('awards');
});

app.get('/web-fundamentals-exam', (request, response) => {
    const webFun = [
            {"Exam": "Web fundamentals Exam"},
            {"Date": "01/17/2024"},
            {"Awarded_by": "Karen Marie Igcasan"},
            {'Technologies': [ 'HTML', 'CSS', 'LESS', 'Bootstrap', 'jQuery', 'SQL', 'ERD']}
        ]
    response.render('web-fundamentals', {award: webFun});
})

app.get('/php-exam', (request, response) => {
    const php = [
            {"Exam": "PHP EXAM"},
            {"Date": "02/15/2024"},
            {"Awarded_by": "Karen Marie Igcasan"},
            {'Technologies': [ 'PHP', 'OOP', 'ORM', 'CodeIgniter', 'AJAX']}
        ]
    response.render('php', {award: php});
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
})

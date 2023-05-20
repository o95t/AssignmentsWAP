const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const Questions = require('./questions.js');
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(cookieParser());

app.use(session({
    secret: "Shh, its a secret!",
    saveUninitialized: true,
    resave: false
}));

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (req, res) {
    return res.render("index");
});

app.post('/quiz/q/:id', function (req, res) {
    const id = req.params.id;
    if (id >= 1 && id <= 4) {
       req.session['q' + id] = new Number(req.body.answer);
       const newId = Number(id) + 1;
       printSession(req);
       return res.redirect("/quiz/q/" + newId)
       
    }
    if (id == 5) {
       req.session.q5 = new Number(req.body.answer);
       return res.redirect('/quiz/result');
    }
    else {
       res.writeHead(404, { 'Content-Type': 'text/html' });
       return res.end("404 Not Found");
    }
 });

 app.get('/quiz/q/:id', function (req, res) {
    const id = req.params.id;
    if (id == 1) {
       req.session.score = 0;
       req.session.q1 = Number.NEGATIVE_INFINITY;
       req.session.q2 = Number.NEGATIVE_INFINITY;
       req.session.q3 = Number.NEGATIVE_INFINITY;
       req.session.q4 = Number.NEGATIVE_INFINITY;
       req.session.q5 = Number.NEGATIVE_INFINITY;
    }
 
    if (id >= 1 && id <= 5) {
       return  res.render('q_view', {
          score: calculateScore(req),
          question: Questions.questions[(id - 1)],
          id: req.params.id
       });
    }
    else {
       res.writeHead(404, { 'Content-Type': 'text/html' });
       return res.end("404 Not Found");
    }
 
 });

function printSession(req) {
    const id = req.params.id;
    console.log(req.session);
    for (let i = 1; i <  id; i++) {
        console.log(req.session['q'+i]);
     }
}


app.get('/quiz/result', function (req, res) {
    res.render('result_view', { score: calculateScore(req) });
 });
 
 function calculateScore(req) {
    let score = 0;
 
    for (let i = 0; i < 5; i++) {
 
       if (req.session['q' + (i + 1)] == Questions.answers[i]) {
          score++;
       }
    }
    return score;
 }

app.listen(8080);
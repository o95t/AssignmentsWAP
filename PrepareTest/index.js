var express = require('express');
var app = express();
//set view engine

app.get('/api'
    , function (req, res) {
        res.locals = { title: 'CS572' };
        res.render('index');
    });


// app.set("view engine", "jade")
// app.get('/', function (req, res) {
//     res.render('sample'); //sends HTML version of sample.pug to Browser
// });
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
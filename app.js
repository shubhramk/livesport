/**
 * Created by priya.singh on 10/20/2016.
 */
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');



var api = require('./routes/api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/api', api);

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});

module.exports = app;
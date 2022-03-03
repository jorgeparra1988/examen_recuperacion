var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {engine} = require('express-handlebars');
const mysql = require('mysql');

var indexRouter = require('./routes/index');
var linksRouter = require('./routes/links');



var app = express();



app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    layout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname:'.hbs',
    helpers:require('./lib/handlebars')
}))

app.set('view engine','.hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/links', linksRouter);


module.exports = app;

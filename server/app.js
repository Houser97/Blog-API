var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken')

var app = express();

// Importar DOTENV.
if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
};

const apiRouter = require('./routes/api');

// Colocar link de acceso a base de datos.
const MongoDB = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.hfuvxe2.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
mongoose.connect(MongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

// Obtener conexión por defecto.
const db = mongoose.connection;

// Ligar conexión con evento de error.
db.on('error', console.error.bind((console, 'MongoDB connection error: ')))

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

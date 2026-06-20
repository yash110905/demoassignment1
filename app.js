const express = require('express');
const path = require('path');
const hbs = require('hbs');
const indexRouter = require('./routes/index');
const app = express();

hbs.registerHelper('ifEquals', (a, b, options) => {
  return a === b ? options.fn(this) : options.inverse(this);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.use((req, res) => {
  res.status(404).render('error', {
    title: '404 - Page Not Found',
    message: 'The page you are looking for does not exist.',
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).render('error', {
    title: 'Server Error',
    message: err.message || 'An unexpected error occurred.',
  });
});

module.exports = app;

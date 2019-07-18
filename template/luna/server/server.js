'use strict';

const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(expressStaticGzip(path.join(__dirname, 'static'), {
  index: false,
}));

app.get('*', function response(req, res) {
  res.render(path.join(__dirname, 'static/index.html'), {});
});

var server = app.listen(process.env.PORT || 8000, '0.0.0.0', function () {
  console.log('app listening on port ', process.env.PORT || 8000);
});

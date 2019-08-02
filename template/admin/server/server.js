'use strict';

var bodyParser = require('body-parser');

const API_SERVER = process.env.API_SERVER ? process.env.API_SERVER : '127.0.0.1:8000';
const API_PATH = process.env.API_PATH ? process.env.API_PATH : '/channel/merch';
const HTTPS = process.env.HTTPS ? process.env.HTTPS === 'true' ? true : false : false;
const TIMEOUT = 60000;
var express = require('express'),
  proxy = require('http-proxy-middleware'),
  expressStaticGzip = require('express-static-gzip'),
  path = require('path'),
  app = express();

function getClientIp(req) {
  var headers = req.headers;
  var ip = headers['x-real-ip'] || headers['x-forwarded-for'] || req.connection.remoteAddress;
  return ip;
}

app.use(expressStaticGzip(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false, limit: '100mb' }));
app.use('*', (req, res, next) => {
  req.body = JSON.stringify(req.body);
  let clientIp = getClientIp(req);
  req.headers['client_ip'] = clientIp;
  next();
});
let apiServer = API_SERVER;
if (apiServer.indexOf('http') < 0) {
  apiServer = `${HTTPS ? 'https' : 'http'}://${apiServer}`;
}
app.use('/api', proxy({
  target: apiServer,
  timeout: TIMEOUT,
  changeOrigin: true,
  pathRewrite: { [`^/api`]: API_PATH },
}));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.use((err, req, res, next) => {
  let date = new Date();
  var meta = '[' + date.toISOString() + ']' + req.url + '\n';
  console.log(meta + err.stack + '\n');
  next();
});

var server = app.listen(process.env.PORT || 8000, '0.0.0.0', function () {
  console.log('app listening on port ', process.env.PORT || 8000);
});


server.timeout = TIMEOUT;

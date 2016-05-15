const http = require('http');
const express = require('express');
const app = express();
const github = require('octonode');

const githubClientID =  'f3a6c9358a522a92fe6b';
const githubClientSecret = '29e39b8a15aa8d010ff07d92ce171bd9758a3c2b';

app.use(require('morgan')('short'));

(function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack/common.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));

  app.use(express.static(__dirname + '/'));
})();

app.get('/login', function root(req, res) {
  const authUrl = github.auth.config({
    id: githubClientID,
    secret: githubClientSecret
  }).login(['user', 'repo', 'gist']);

  res.redirect(302, authUrl);
});

app.get('/auth', function root(req, res) {
  github.auth.login(req.query.code, function (err, token) {

    res.redirect(302, `/dashboard?token=${token}`);
  });
});

app.get(/.*/, function root(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, function onListen() {
  const address = server.address();

  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});

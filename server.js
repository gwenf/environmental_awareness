var express = require('express'),
      app = express(),
      config = require('./webpack.config.js'),
      webpack = require('webpack'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler,
  {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.set('view engine', 'pug');
// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res){
  res.render('index', { title: 'Home' })
});
app.get('/about', function(req,res){
  res.render('about', { title: 'About' })
});

app.listen(3000, function(){
  console.log('Express server listening on port 3000');
});

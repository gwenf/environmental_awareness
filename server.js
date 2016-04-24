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
app.get('/what-difference', function(req, res){
  res.render('what-difference', { title: 'What difference can I make?' })
});
app.get('/tutorials', function(req,res){
  res.render('tutorials', { title: 'Tutorials' })
});
app.get('/setting-goals', function(req, res){
  res.render('setting-goals', { title: 'Setting Goals' })
});
app.get('/take-action', function(req,res){
  res.render('take-action', { title: 'Take Action' })
});

// var Location = require('react-router').location;
// var routes = require('./client/routes.js');
// var ReactDOMServer = require('react-dom').server;
// //catch all for routing, setting up react router
// app.use(function(req,res,next){
//
// });



app.listen(3000, function(){
  console.log('Express server listening on port 3000');
});



// var express = require('express'),
//       app = express(),
//       config = require('./webpack.config.js'),
//       webpack = require('webpack'),
//       webpackDevMiddleware = require('webpack-dev-middleware'),
//       webpackHotMiddleware = require('webpack-hot-middleware');
//
// var React = require('react');
// var Router = require('react-router');
// var routes = require('./client/routes.js')
//
//
// var compiler = webpack(config);
// app.use(webpackDevMiddleware(compiler,
//   {noInfo: true, publicPath: config.output.publicPath}));
// app.use(webpackHotMiddleware(compiler));
//
// app.set('view engine', 'pug');
// // app.set('views', __dirname + '/views');
// app.use(express.static(__dirname + '/dist'));
//
// app.get('/', function(req, res){
//   res.render('index', { title: 'Home' })
// });
// // app.get('/about', function(req,res){
// //   res.render('about', { title: 'About' })
// // });
// // app.use(router);
// //
// // function router (req, res, next) {
// //   var context = {
// //     routes: routes, location: req.url
// //   };
// //   Router.create(context).run(function ran (Handler, state) {
// //     res.render('layout', {
// //       reactHtml: React.renderToString(React.createElement(Handler))
// //     });
// //   });
// // }
//
// app.listen(3000, function(){
//   console.log('Express server listening on port 3000');
// });

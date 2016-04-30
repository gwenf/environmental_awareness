var express = require('express'),
      app = express(),
      config = require('./webpack.config.js'),
      webpack = require('webpack'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware');

//for passport authentication
var path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    flash = require('connect-flash'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
    mongo = require('mongodb'),
    mongoose = require('mongoose');
// bind_ip=127.0.0.1;
// mongoose.connect('mongodb://0.0.0.0:27017/enviro');
// var db = mongoose.connection;
require('./models/database.js');

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));


app.use(passport.initialize());
app.use(passport.session());

//express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//connect flash
app.use(flash());
app.use(function (req,res,next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});



var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler,
  {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.set('view engine', 'pug');
// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/dist'));

var routes = require('./express/index');
var users = require('./express/users');

app.use('/',routes);
app.use('/',users);


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

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', { title: 'Home' })
});
router.get('/about', function(req,res){
  res.render('index', { title: 'About' })
});
router.get('/what-difference', function(req, res){
  res.render('index', { title: 'What difference can I make?' })
});
router.get('/tutorials', function(req,res){
  res.render('index', { title: 'Tutorials' })
});
router.get('/setting-goals', function(req, res){
  res.render('index', { title: 'Setting Goals' })
});
router.get('/take-action', function(req,res){
  res.render('index', { title: 'Take Action' })
});
router.get('/login', function(req,res){
  res.render('index', { title: 'Login' })
});
router.get('/register', function(req,res){
  res.render('index', { title: 'Sign Up' })
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;

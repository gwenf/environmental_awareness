var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res){
  User.find({},function(err,users){
    if (err){
      return res.status(500).json({message: err.message})
    }
    console.log(users);
  })

  res.render('index', { title: 'Home', users: User })
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
router.get('/dashboard', ensureAuthenticated, function(req,res){
  res.render('dashboard', { title: 'User Dashboard' })
});

router.get('/data', ensureAuthenticated, function(req,res){
  res.json({data: req.user});
});
// router.get('/login', function(req,res){
//   res.render('index', { title: 'Login' })
// });
// router.get('/register', function(req,res){
//   res.render('index', { title: 'Sign Up' })
// });

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/login');
	}
}

module.exports = router;

var express = require('express'),
  passport = require('passport'),
  wecomeMessage = 'Welcome to YelpCamp! ';
var router = express.Router();

var User = require('../models/user');

// HOME

router.get('/', function(req, res) {
    res.render('landing');
  });

  // Auth routes

router.get('/register', function(req, res) {
    res.render('register');
  });
  
  router.post('/register', function(req, res) {
    var newUser = new User({
      username: req.body.username
    });
    User.register(newUser, req.body.password, function(err, user) {
      if (err) {
        req.flash('error', err.message);
        res.redirect('register');
      } else {
        passport.authenticate('local')(req, res, function() {
          req.flash('success', wecomeMessage + user.username);
          res.redirect('/campgrounds');
        });
      }
    });
  });
  
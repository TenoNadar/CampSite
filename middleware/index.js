var Campground = require('../models/campground'),
  Comment = require('../models/comment'),
  errMessage = 'You can only make changes to a campground you added';

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      req.flash('error', 'Please Log in First');
      res.redirect('/login');
    }
  };
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

  middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    if (req.isAuthenticated()) {
      Campground.findById(req.params.campground_id, function(err, foundCampgrnd) {
        if (err) {
          req.flash('error', 'Campground was not found');
          res.redirect('back');
        } else if (foundCampgrnd.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', errMessage);
          res.redirect('back');
        }
      });
    } else {
      req.flash('error', 'Please Log in First');
      res.redirect('/login');
    }
  };
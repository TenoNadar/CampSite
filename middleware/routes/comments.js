var express = require('express');
var router = express.Router({
  mergeParams: true
});

var Campground = require('../models/campground'),
  Comment = require('../models/comment'),
  middleware = require('../middleware');
// Campground Comment NEW

router.get('/new', middleware.isLoggedIn, function(req, res) {
    Campground.findById(req.params.campground_id, function(err, foundCampground) {
      if (err) {
        req.flash('error', 'Campground was not found');
        res.redirect('back');
      } else {
        res.render('comments/new', {
          campground: foundCampground
        });
      }
    });
  });
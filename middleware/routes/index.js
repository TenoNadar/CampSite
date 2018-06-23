var express = require('express');
var router = express.Router({
  mergeParams: true
});

var Campground = require('../models/campground'),
  middleware = require('../middleware');

// Campground INDEX

router.get('/', function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      res.redirect('back');
    } else {
      res.render('campgrounds/index', {
        campgrounds: allCampgrounds
      });
    }
  });
});

// Campground NEW

router.get('/new', middleware.isLoggedIn, function(req, res) {
    res.render('campgrounds/new');
  });
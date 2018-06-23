var express = require('express');
var router = express.Router({
  mergeParams: true
});

var Campground = require('../models/campground'),
  Comment = require('../models/comment'),
  middleware = require('../middleware');

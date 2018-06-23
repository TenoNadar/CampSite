// =========//
// Setup!  //
// =========//

var reseedDatabase = false;

var express = require('express');
var app = express();
  bodyParser = require('body-parser');
  flash = require('connect-flash'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  passport = require('passport'),
  LocalStrategy = require('passport-local');


var User = require('./models/user'),
  indexRoutes = require('./routes/index'),
  campgroundRoutes = require('./routes/campgrounds'),
  commentRoutes = require('./routes/comments'),
  seedDB = require('./seeds');

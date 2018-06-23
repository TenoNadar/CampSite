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

  // Misc Setups

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(flash());
app.set('view engine', 'ejs');

// Backup variables in the event of environment variable issues.  See README
var databaseURL = process.env.DATABASEURL || 'mongodb://localhost/yelp_camp';
var sessionSecret = process.env.SESSION_SECRET || 'This is a backup secret';

mongoose.connect(databaseURL);

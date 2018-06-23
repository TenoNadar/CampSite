var express = require('express'),
  passport = require('passport'),
  wecomeMessage = 'Welcome to YelpCamp! ';
var router = express.Router();

var User = require('../models/user');

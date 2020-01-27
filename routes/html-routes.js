// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
var sequelize = require("sequelize");


module.exports = function (app) {
  //html route to index on homeslice
  app.get('/', function (req, res, next) {
    res.render('index');
  });

  //html route to the page to create a new user
  app.get('/newPerson', function (req, res, next) {

    res.render('newPerson');
  });

  //html route to page with form for creating new event
  app.get('/newEvent', function (req, res, next) {

    res.render('newEvent');
  });

}





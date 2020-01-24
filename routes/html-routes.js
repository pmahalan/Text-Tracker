// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var models = require("../models");
var express = require("express");
var connection = require("../config/connection");
var Sequelize = require("sequelize");

module.exports = function(app) {
  
  app.get('/', function (req, res, next) {
    //call to model (query)
    res.render('index');
  });

  app.get('/newPerson', function (req, res, next) {
    
    
    res.render('newPerson');
  });



  app.get('/newEvent', function (req, res, next) {
    //call to model (query)
    res.render('newEvent');
  });


  app.get('/users', function (req, res, next) {
    //call to model (query)
    db.Users.findAll({}).then((data)=>{
      res.json(data);
    })
  });


  app.get('/events', function (req, res, next) {
    //call to model (query)
    db.Events.findAll({}).then((data)=>{
      res.json(data);
    })
  })}





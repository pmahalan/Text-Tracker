// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
var express = require("express");
var connection = require("../config/connection");
var Sequelize = require("sequelize");

module.exports = function(app) {
  
  app.get('/', function (req, res, next) {
    //call to model (query)
    res.render('index');
  });

  app.get("/api/users/cell/:cell", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Users.findOne({where: {cell: req.params.cell}}).then((data)=>{
      res.json(data);
    })
  });

  app.get("/api/events/keyword/:keyword", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Events.findOne({where: {keyword: req.params.keyword}}).then((data)=>{
      res.json(data);
    })
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





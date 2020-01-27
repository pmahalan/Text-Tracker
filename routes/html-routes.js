// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
var sequelize = require("sequelize");


module.exports = function(app) {
  
  app.get('/', function (req, res, next) {
    //call to model (query)
    res.render('index');
  });

  app.get("/api/users/cell/:cell", function(req, res) {
      console.log(req.params.cell);
      
    db.Users.findOne({where: {cell: req.params.cell}}).then((data)=>{
      res.json(data);
    })
  });
//building join get to return both users and events with matching keywords
  app.get("/api/users/keyword/:keyword", function(req, res) {
   db.Events.hasMany(db.Users, {foreignKey:'keyword'})
   db.Users.belongsTo(db.Events,{foreignKey:'keyword'})
   db.Users.findAll({where: {keyword:req.params.keyword},include:[{model:db.Events,
     on:{col1:sequelize.where(sequelize.col("Users.keyword"),"=",sequelize.col("Events.keyword"))}
    }]
  }).then((data)=>{
    res.json(data);
  })

  });

  app.get("/api/users/name/:first_name/:last_name", function(req, res) {
  
    db.Users.findAll({where: {first_name: req.params.last_name, first_name: req.params.last_name}}).then((data)=>{
      res.json(data);
    })
  });

  app.get("/api/events/keyword/:keyword", function(req, res) {
    
    db.Events.findOne({where: {keyword: req.params.keyword}}).then((data)=>{
      res.json(data);
    })
  });


  app.get("/api/events/title/:title", function(req, res) {

    db.Events.findOne({where: {title: req.params.title}}).then((data)=>{
      res.json(data);
    })
  });


  app.get('/newPerson', function (req, res, next) {
    
    
    res.render('newPerson');
  });



  app.get('/newEvent', function (req, res, next) {
 
    res.render('newEvent');
  });


  app.get('/users', function (req, res, next) {
 
    db.Users.findAll({}).then((data)=>{
      res.json(data);
    })
  });


  app.get('/events', function (req, res, next) {
 
    db.Events.findAll({}).then((data)=>{
      res.json(data);
    })
  })}





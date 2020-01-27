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


  app.get('/newPerson', function (req, res, next) {
    
    
    res.render('newPerson');
  });



  app.get('/newEvent', function (req, res, next) {
 
    res.render('newEvent');
  });


}





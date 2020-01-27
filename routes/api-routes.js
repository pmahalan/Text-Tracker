// Requiring our models 
var db = require("../models");

module.exports = function(app) {
 
  // #1 -- POST route for creating + saving a new user!
  app.post("/api/users", function(req, res) {
    db.Users.create({
    //"results" above refers to line 9 in user.js (models).

      createdAt: req.body.createdAt,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      cell: req.body.last_name,
      email: req.body.email,
      role: req.body.role,
      keyword: req.body.keyword
    })
    .then(function() {
    res.status(200).send('New person successfully created!');
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
  });

  // #2 -- Route for creating + saving a new event!
  app.post("/api/newEvent", function(req, res) {
    db.Events.create({
    //"Events" above refers to line 9 in events.js (models).

      title: req.body.title,
      location: req.body.location,
      host: req.body.host,
      keyword: req.body.keyword

    })
    .then(function() {
      res.status(200).send('New event successfully created!');
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
  });

  // #3 -- Route for deleting a person.
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
    //"results" above refers to line 9 in user.js (models).
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.json(data);
      });
    });

  // #4 -- Route for updating a person.
  app.put("/api/users", function(req, res) {
    db.Users.update(req.body,
    //"results" above refers to line 9 in user.js (models).
      {
        where: {
          cell: req.body.cell
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });

  // #5 -- Route for deleting an event. 
  app.delete("/api/newEvent/:id", function(req, res) {
    db.Events.destroy({
    //"Events" above refers to line 9 in events.js (models).
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.json(data);
      });
    });

  // #6 -- Route for updating an event. 
  app.put("/api/newEvent", function(req, res) {
    db.Events.update(req.body,
    //"Events" above refers to line 9 in events.js (models).
      {
        where: {
          keyword: req.body.keyword
        }
      })
      .then(function(data) {
        res.json(data);
      });
    });

  // Must create the webhook route that links to clearstream.io

  app.get("/api/webhook", function(req, res) {
    
    db.Users.findOne({where: {cell: req.data.subscriber.mobile_number}}).then((data)=>{
      
      res.json(data);
      console.log(data);
    })
  });

  // app.post("/api/webhook", function(req, res){
  //   db.Users.
    
  // })
  

};

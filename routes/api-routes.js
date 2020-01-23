// Requiring our models 
var db = require("../models");

module.exports = function(app) {
 
  // POST route for saving a new user!
  app.post("/api/users", function(req, res) {
    db.results.create({

      date_texted: req.body.date_texted,
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

  // Route for getting some data about registering events.

  app.post("/api/newEvent", function(req, res) {
    db.Events.create({

      date_event: req.body.date_event,
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

  app.delete("/api/users/:id", function(req, res) {
    db.results.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function() {
        res.json(data);
      });
  });

  app.put("/api/users", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          cell: req.body.cell
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};

app.get("/api/users", function(req, res) {

})
// select all from where something matches something
// for searching for people
// response is a "render" on the handlebars page.

app.get("/api/newEvent", function(req, res) {

})
// select all from where something matches something
// for searching for events
// response is a "render" on the handlebars page.

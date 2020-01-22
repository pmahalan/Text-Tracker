// Requiring our models and passport as we've configured it
var db = require("../models");


module.exports = function(app) {
 
  app.post("/api/users", function(req, res) {
    res.json(req.results);
  });

  app.post("/api/users", function(req, res) {
    db.results.post({
     //stuff we need to get from form (placeholders)
      title: name,
     date_event: datetime,
     location: city,
     host: company,
     keyword: placeholder
    })
      .then(function() {
        res.redirect(307, "/api/users");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
 


  // Route for getting some data about registering events.
  // app.get("/api/newEvent", function(req, res) {
   
     
  //     res.json({
  //       title: name,
  //       date_event: datetime,
  //       location: city,
  //       host: company,
  //     });
}

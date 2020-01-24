// Requiring path to so we can use relative routes to our HTML files
var path = require("path");



module.exports = function(app) {

  app.get("/", function(req, res) {
   
    if (req.user) {
      res.redirect("/users");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/users", function(req, res) {

    if (req.user) {
      res.redirect("/users");
    }
    res.sendFile(path.join(__dirname, "../public/users.html"));
    // ^ we will need to create a new handlebars page for this

  });

  app.get("/events", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newEvent.html"));
  });

};

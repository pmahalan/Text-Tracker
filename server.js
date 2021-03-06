// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");
var express = require("express");
// Creating express app and configuring middleware needed for authentication
var expresshandle = require("express-handlebars");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", expresshandle({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success

db.sequelize.sync({force:false}).then(function() {

  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

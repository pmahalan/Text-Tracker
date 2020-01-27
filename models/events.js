// require('dotenv').config();

// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require('sequelize');
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");
module.exports = function(sequelize, Datatypes){
// Creates a "User" model that matches up with DB
var Events = sequelize.define("Events", {
    title: Datatypes.STRING,
    location: Datatypes.STRING,
    host: Datatypes.STRING,
    keyword: Datatypes.STRING
  });
// Makes the User Model available for other files (will also create a table)
  return Events;
}


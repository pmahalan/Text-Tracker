require('dotenv').config();

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require('sequelize');
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with DB
var Events = sequelize.define("events", {

    date_event: Sequelize.DATE,
    title: Sequelize.STRING,
    location: Sequelize.STRING,
    host: Sequelize.STRING,
    keyword: Sequelize.STRING
  });

  // Syncs with DB
  Events.sync();

// Makes the User Model available for other files (will also create a table)
  module.exports = Events;
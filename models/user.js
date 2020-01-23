require('dotenv').config();

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require('sequelize');
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "results" model that matches up with DB
var results = sequelize.define("people", {

    date_texted: Sequelize.DATE,
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    cell: Sequelize.BIGINT,
    email: Sequelize.STRING,
    role: Sequelize.STRING,
    keyword: Sequelize.STRING
  });

  // Syncs with DB
  results.sync();

// Makes the results Model available for other files (will also create a table)
  module.exports = results;
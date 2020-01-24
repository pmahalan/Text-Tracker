// require('dotenv').config();

// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require('sequelize');
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

module.exports = function(sequelize, Datatypes){
// Creates a "results" model that matches up with DB

var Users = sequelize.define("user", {
    date_texted: Datatypes.DATE,
    first_name: Datatypes.STRING,
    last_name: Datatypes.STRING,
    cell: Datatypes.BIGINT,
    email: Datatypes.STRING,
    role: Datatypes.STRING,
    keyword: Datatypes.STRING

  });

 // Makes the results Model available for index.js
 return Users;
}



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


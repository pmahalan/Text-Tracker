
module.exports = function(sequelize, Datatypes){
  // Creates a "User" model that matches up with DB
  var People = sequelize.define("Peoples", {
    first_name: Datatypes.STRING,
    last_name: Datatypes.STRING,
    cell: Datatypes.BIGINT,
    email: Datatypes.STRING,
    role: Datatypes.STRING,
    keyword: Datatypes.STRING
    });
  // Makes the User Model available for other files (will also create a table)
    return People;
  }
  
  
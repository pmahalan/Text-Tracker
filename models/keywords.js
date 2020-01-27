module.exports = function(sequelize, Datatypes){
    // Creates a "User" model that matches up with DB
    var Keywords = sequelize.define("Keywords", {
        cell: Datatypes.BIGINT,
        keywordTwo: Datatypes.STRING,
       
      });
    // Makes the User Model available for other files (will also create a table)
      return Keywords;
    }
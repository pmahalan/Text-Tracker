// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var Sequelize = require("sequelize");
var sequelize = new Sequelize("sequelize_people_db", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
module.exports = sequelize;

// var mysql2 = require("mysql2");
// var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql2.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: null,
//     database: "people_db"
//   });
// };

// connection.connect();
// module.exports = connection;
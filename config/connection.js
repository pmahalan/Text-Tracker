// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql2 = require("mysql2");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql2.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql2.createConnection({
    host: "vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "	kbkd2frusi0yuu95",
    password: "ywaisq4lta2uh714",
    database: "	gcjl719enzijbntb"
  });
};

connection.connect();
module.exports = connection;

// OLD CONNECTION INFO (pre-jaws db!)

// var Sequelize = require("sequelize");
// var sequelize = new Sequelize("sequelize_people_db", "root", "root", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });
// module.exports = sequelize;

// var mysql = require('mysql');


// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "todoDB"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to todoDB!");
//   });


/////////////////////////////////////////////////////
const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize("todoDB", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Export 
module.exports = db

  //  module.exports = con;
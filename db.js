const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "employee_db"
});

db.connect((err) => {

  if (err) {
    console.log("Database Error");
    console.log(err);
    return;
  }

  console.log("MySQL Connected");

});

module.exports = db;
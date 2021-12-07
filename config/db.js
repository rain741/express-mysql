const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rain0740",
  database: "skilvul",
});

module.exports = connection;
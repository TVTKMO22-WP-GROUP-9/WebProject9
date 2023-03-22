const mysql = require("mysql");
const connection = mysql.createPool({
  host: "host",
  user: "user",
  password: "password",
  database: "database",
  port: "port",
});
module.exports = connection;

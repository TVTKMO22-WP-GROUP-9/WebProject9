const db = require("../../database_data");

const carbondioxide = {
  getAll: function (callback) {
    return db.query( "SELECT * from gast_carbondioxide", callback)
      }
  }
  module.exports = carbondioxide;
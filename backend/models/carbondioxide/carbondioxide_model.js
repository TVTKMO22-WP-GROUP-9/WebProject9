const db = require("../../database_data");

const carbondioxide = {
  getAll: function (callback) {
    return db.query( "SELECT * from gast_carbondioxide", callback)
      },
  getById: function (id, callback) {
    return db.query( "SELECT * from gast_carbondioxide where id_gast_carbondioxide=?",[id], callback);
          },
  };
  module.exports = carbondioxide;
const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("SELECT * FROM iceberg_3", callback);
  },
  getById: function (id, callback) {
    return db.query("SELECT * FROM iceberg_3 where IceAge=?", [id], callback);
  },
};
module.exports = book;

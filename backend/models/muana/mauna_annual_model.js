const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("SELECT * FROM mauna_annual", callback);
  },
  getById: function (id, callback) {
    return db.query("SELECT * FROM mauna_annual where time=?", [id], callback);
  },
};
module.exports = book;

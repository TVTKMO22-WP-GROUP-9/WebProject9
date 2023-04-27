const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("SELECT * FROM mauna_monthly", callback);
  },
  getById: function (id, callback) {
    return db.query("SELECT * FROM mauna_monthly where time=?", [id], callback);
  },
};
module.exports = book;

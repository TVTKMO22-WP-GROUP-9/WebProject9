const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("SELECT * FROM reconstruction", callback);
  },
  getById: function (id, callback) {
    return db.query(
      "SELECT * FROM reconstruction where time=?",
      [id],
      callback
    );
  },
};
module.exports = book;

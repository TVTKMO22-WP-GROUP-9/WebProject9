const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("SELECT * FROM visualization4", callback);
  },
  getById: function (id, callback) {
    return db.query(
      "SELECT * FROM visualization4 where country=?",
      [id],
      callback
    );
  },
};
module.exports = book;

const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("SELECT * FROM hadcrut_southern_monthly", callback);
  },
  getById: function (id, callback) {
    return db.query(
      "SELECT * FROM hadcrut_southern_monthly where time=?",
      [id],
      callback
    );
  },
};
module.exports = book;

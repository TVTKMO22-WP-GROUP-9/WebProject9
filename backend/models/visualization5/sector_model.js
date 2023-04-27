const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("SELECT * FROM sector", callback);
  },
};
module.exports = book;
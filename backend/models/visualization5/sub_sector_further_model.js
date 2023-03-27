const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("SELECT * FROM sub_sector_further", callback);
  },
};
module.exports = book;
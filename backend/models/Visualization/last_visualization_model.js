const db = require("../../database_data");

const las_vis = {
  getById: function (user_id, callback) {
    return db.query(
      "SELECT * FROM visualization WHERE user_id = ? ORDER BY id_visualization DESC LIMIT 1",
      [user_id],
      callback
    );
  },
};
module.exports = las_vis;

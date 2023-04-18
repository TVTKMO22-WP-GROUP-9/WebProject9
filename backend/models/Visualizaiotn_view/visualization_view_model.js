const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("select * from visualization_view", callback);
  },
  getById: function (id, callback) {
    return db.query(
      "select * from visualization_view where visualization_id=?",
      [id],
      callback
    );
  },
  add: function (visualization, callback) {
    return db.query(
      "insert into visualization_view ( visualization_id,display_order,line_name, text) values(?,?,?,?)",
      [
        visualization.visualization_id,
        visualization.display_order,
        visualization.line_name,
        visualization.text,
      ],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query(
      "delete from visualization_view where id_visualization_view=?",
      [id],
      callback
    );
  },
  update: function (id, visualization, callback) {
    return db.query(
      "update user set visualization_id=?,display_order=?, line_name=? where id_visualization_view=?",
      [
        visualization.visualization_id,
        visualization.display_order,
        visualization.line_name,
        id,
      ],
      callback
    );
  },
};
module.exports = book;

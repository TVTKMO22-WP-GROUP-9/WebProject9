const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("select * from visualization", callback);
  },
  getById: function (id, callback) {
    return db.query(
      "select * from visualization where id_visualization=?",
      [id],
      callback
    );
  },
  add: function (visualization, callback) {
    return db.query(
      "insert into visualization (url,text,user_id) values(?,?,?)",
      [visualization.url, visualization.text, visualization.user_id],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query(
      "delete from visualization where id_visualization=?",
      [id],
      callback
    );
  },
  update: function (id, visualization, callback) {
    return db.query(
      "update user set url=?, text=?, user_id=? where id_visualization=?",
      [visualization.url, visualization.text, visualization.user_id, id],
      callback
    );
  },
};
module.exports = book;

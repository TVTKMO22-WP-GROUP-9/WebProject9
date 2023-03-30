const db = require("../../database_data");

const book = {
  getAll: function (callback) {
    return db.query("select * from user", callback);
  },
  getById: function (id, callback) {
    return db.query("select * from user where id_user=?", [id], callback);
  },
  add: function (book, callback) {
    return db.query(
      "insert into user (login_user,password_user,fname_user,lname_user,email_user) values(?,?,?)",
      [book.name, book.author, book.isbn],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query("delete from user where id_user=?", [id], callback);
  },
  update: function (id, book, callback) {
    return db.query(
      "update user set fname_user=?,lname_user=?, email_user=?, password_user=? where id_user=?",
      [book.name, book.author, book.isbn, id],
      callback
    );
  },
};
module.exports = book;

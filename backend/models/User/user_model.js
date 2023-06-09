const db = require("../../database_data");
const bcrypt = require("bcryptjs");

const saltRounds = 10;
const user = {
  getAll: function (callback) {
    return db.query("SELECT * FROM user", callback);
  },
  getById: function (id, callback) {
    return db.query("select * from user where login_user=?", [id], callback);
  },
  add: function (user, callback) {
    bcrypt.hash(user.password_user, saltRounds, function (err, hash) {
      console.log(
        hash +
          "\n" +
          user.id_user +
          "\n" +
          user.login_user +
          "\n" +
          user.fname_user
      );

      return db.query(
        "insert into user (login_user, password_user, fname_user, lname_user, email_user) values(?,?,?,?,?)",
        [
          user.login_user,
          hash,
          user.fname_user,
          user.lname_user,
          user.email_user,
        ],
        callback
      );
    });
  },
  delete: function (id, callback) {
    db.query(
      "DELETE FROM visualization_view WHERE visualization_id IN (SELECT id_visualization FROM visualization WHERE user_id = ?)",
      [id],
      function (error, results, fields) {
        if (error) {
          console.log(error);
          return callback(error);
        }
        db.query(
          "DELETE FROM visualization WHERE user_id = ?",
          [id],
          function (error, results, fields) {
            if (error) {
              console.log(error);
              return callback(error);
            }
            db.query(
              "DELETE FROM user WHERE id_user = ?",
              [id],
              function (error, results, fields) {
                if (error) {
                  console.log(error);
                  return callback(error);
                }
                return callback(null, results);
              }
            );
          }
        );
      }
    );
  },
  update: function (id, user, callback) {
    bcrypt.hash(user.password_user, saltRounds, function (err, hash) {
      return db.query(
        "update user set password_user=? where id_user=?",
        [hash, id],
        callback
      );
    });
  },

  /* checkPassword: function (id_user, callback) {
    console.log("testimaaa");
    return db.query(
      "select user_password from user where id_user=?",
      [id_user],
      callback
    );
  },*/
};

module.exports = user;

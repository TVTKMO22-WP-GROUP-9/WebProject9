const db = require("../../database_data");

const login = {
  checkPassword: function (id_user, callback) {
    console.log("testim");
    return db.query(
      "SELECT password_user,id_user FROM user WHERE login_user = ?",
      [id_user],
      callback
    );
  },
};

module.exports = login;

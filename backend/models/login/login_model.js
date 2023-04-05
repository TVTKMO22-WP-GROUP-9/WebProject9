const db = require("../../database_data");

const login = {
  checkPassword: function (id_user, callback) {
    console.log("testim");
    return db.query(
      "SELECT password_user FROM user WHERE id_user = ?",
      [id_user],
      callback
    );
  },
};

module.exports = login;

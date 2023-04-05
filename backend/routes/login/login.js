const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const user = require("../../models/User/user_model");
const login = require("../../models/login/login_model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

router.post("/", function (request, response) {
  if (request.body.id_user && request.body.password_user) {
    const id_user = request.body.id_user;
    console.log("id_user " + id_user);

    const password_user = request.body.password_user;
    console.log("password " + password_user);
    
    login.checkPassword(id_user, function (dbError, dbResult) {
      if (dbError) {
        response.json(dbError.errno);
        console.log(dbError)
        console.log("user does not exists");
        response.send(false);
      } else {
        /*console.log(dbResult[0].pin + " " + pin);*/
        //yllä oleva aiheuttaa errorin jos account id on väärä
        if (dbResult.length > 0) {
         
          bcrypt.compare(password_user, dbResult[0].password_user, function (err, compareResult) {
            if (compareResult) {
              console.log("succes");
              const token = generateAccessToken({
                login_user: request.body.id_user,
              });
              response.send(token);
            } else {
              console.log("wrong password");
              response.send(false);
            }
          });
        } else {
          console.log("id_user does not exists");
          response.send(false);
        }
      }
    });
  } else {
    console.log("id_user or password missing");
    response.send(false);
  }
});

function generateAccessToken(login_user) {
  dotenv.config();
  return jwt.sign(login_user, process.env.MY_TOKEN, {
    expiresIn: "1800s",
  });
}

module.exports = router;

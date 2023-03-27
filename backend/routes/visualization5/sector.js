const express = require("express");
const router = express.Router();
const book = require("../../models/visualization5/sector_model");

router.get("/", function (request, response) {
  book.getAll(function (err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      console.log(dbResult);
      response.json(dbResult);
    }
  });
});
module.exports = router;
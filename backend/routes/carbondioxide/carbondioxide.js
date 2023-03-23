const express = require("express");
const router = express.Router();
const carbondioxide = require("../../models/carbondioxide/carbondioxide_model");

router.get("/", function (request, response) {
  carbondioxide.getAll(function (err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      console.log(dbResult);
      response.json(dbResult);
    }
  });
});
module.exports = router;
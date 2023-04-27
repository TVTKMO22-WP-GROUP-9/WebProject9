const express = require("express");
const router = express.Router();
const book = require("../../models/muana/mauna_annual_model");

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

router.get("/:id", function (request, response) {
  book.getById(request.params.id, function (err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;

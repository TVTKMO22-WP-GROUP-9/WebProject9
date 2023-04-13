const express = require("express");
const router = express.Router();
const book = require("../../models/Visualization/last_visualization_model");

router.get("/:id", function (request, response) {
  book.getById(request.params.id, function (err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      console.log(dbResult);
      response.json(dbResult);
    }
  });
});

module.exports = router;

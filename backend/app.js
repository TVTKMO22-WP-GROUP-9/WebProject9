var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//const bookRouter = require("./routes/book");
const hadcrudRouter = require("./routes/hadcrud");

const reconstruction = require("./routes/reconstruction/reconstruction");

const maunaAnnual = require("./routes/muana/mauna_annual");
const mauanaMonthly = require("./routes/muana/mauna_monthly");

const iceberg1 = require("./routes/iceberg/iceberg_1");
const iceberg2 = require("./routes/iceberg/iceberg_2");
const iceberg3 = require("./routes/iceberg/iceberg_3");

var app = express();

const helmet = require("helmet");
const cors = require("cors");

app.use(helmet());
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/reconstruction", reconstruction);

app.use("/maunaAnnual", maunaAnnual);
app.use("/mauanaMonthly", mauanaMonthly);

app.use("/hadcrud", hadcrudRouter);

app.use("/iceberg1", iceberg1);
app.use("/iceberg2", iceberg2);
app.use("/iceberg3", iceberg3);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

module.exports = app;

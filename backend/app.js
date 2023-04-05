var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

//const bookRouter = require("./routes/book");
const hadcrudRouter = require("./routes/hadcrud");

const reconstruction = require("./routes/reconstruction/reconstruction");

const maunaAnnual = require("./routes/muana/mauna_annual");
const mauanaMonthly = require("./routes/muana/mauna_monthly");

const iceberg1 = require("./routes/iceberg/iceberg_1");
const iceberg2 = require("./routes/iceberg/iceberg_2");
const iceberg3 = require("./routes/iceberg/iceberg_3");

const carbondioxide = require("./routes/carbondioxide/carbondioxide");
const visualization4 = require("./routes/visualization4/visualization4.js");

const sector = require("./routes/visualization5/sector.js");
const sub_sector = require("./routes/visualization5/sub_sector.js");
const sub_sector_further = require("./routes/visualization5/sub_sector_further.js");
const user = require("./routes/User/user");
const login = require("./routes/login/login.js");

const visualization = require("./routes/Visualization/Visualization");
const visualization_view = require("./routes/Visualization_view/visualization_view");

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

app.use(authenticateToken);

app.use("/reconstruction", reconstruction);

app.use("/maunaAnnual", maunaAnnual);
app.use("/mauanaMonthly", mauanaMonthly);

app.use("/hadcrud", hadcrudRouter);

app.use("/iceberg1", iceberg1);
app.use("/iceberg2", iceberg2);
app.use("/iceberg3", iceberg3);

app.use("/carbondioxide", carbondioxide);
app.use("/visualization4", visualization4);

app.use("/sector", sector);
app.use("/sub_sector", sub_sector);
app.use("/sub_sector_further", sub_sector_further);
app.use("/user", user);
app.use("/login/", login);


app.use("/visualization", visualization);
app.use("/visualization_view", visualization_view);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

module.exports = app;

//Please remove in the comments, not delete.
/*
const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});*/

const port = 229;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

//authentikoi tokenin
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log("token = " + token);
  
  if (token == null) {
    console.log ("unknown user");
    next();
  }
  else {
    jwt.verify(token, process.env.MY_TOKEN, (err, login_user) => {
      console.log(err);
  
      if (err) console.log ("token error");
      else console.log (login_user);
      req.login_user = login_user;
      next();
     
    });
  }
  
}

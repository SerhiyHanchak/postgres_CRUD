const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const helmet = require("helmet");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(helmet());

app.use(require('./routes'))

app.listen(3030, () => {
  console.log("Server successully starts on " + 3030 + " port");
});

module.exports = app;
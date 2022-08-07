// Server setup
const express = require("express");
const app = express();
const api = require("./server/routes/api");
const bodyParser = require("body-parser");
app.use("/", api);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose setup
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/peopleDB", { useNewUrlParser: true });

const port = 4200;
app.listen(port, function () {
  console.log(`Running on port ${port}`);
});

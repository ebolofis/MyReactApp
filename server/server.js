var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", function(req, res) {
  res.send({ result: "WELCOME TO YOUR NEW APP" });
});

app.listen(8000, () => {
  console.log("Server running on port : 8000");
});

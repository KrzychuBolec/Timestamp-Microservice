var express = require(`express`);
const res = require("express/lib/response");
var app = express();
var handlers = require("./handlers.js");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", () => {
  try {
    handlers.setHomepage;
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/:date", handlers.queryHandle);

app.listen(1988, () => {
  console.log("Server is listening on port 5000");
});

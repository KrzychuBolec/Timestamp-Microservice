var express = require(`express`);
const res = require("express/lib/response");
var app = express();
var handlers = require("./handlers.js");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", handlers.setHomepage);

app.get("/api/:date", handlers.queryHandle);

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

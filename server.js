var express = require(`express`);
const res = require("express/lib/response");
var app = express();
var handlers = require("./handlers.js");
var cors = require("cors");

app.use("/public", express.static(__dirname + "/public"));

app.use(cors({ optionsSuccessStatus: 200 }));

app.get("/", handlers.setHomepage);

app.get("/api/:date?", handlers.queryHandle);

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

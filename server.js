var express = require(`express`);
var app = express();
var handlers = require("./handlers.js");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", handlers.setHomepage);

app.get("/api/:date", handlers.queryHandle);

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

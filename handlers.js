var express = require("express");
const res = require("express/lib/response");
var Functions = require("./functions");

let setHomepage = (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
};

let queryHandle = (req, res) => {
  let date = Functions.formatDate(req.params.date);
  if (date == "Invalid date") {
    console.log(date + " " + req.path);
    res.status(404).json(date);
  } else {
    console.log(date + " " + req.path);
    res.status(200).json(date);
  }
};

module.exports = {
  setHomepage,
  queryHandle,
};

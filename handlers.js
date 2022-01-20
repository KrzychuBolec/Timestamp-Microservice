var express = require("express");
const res = require("express/lib/response");
var Functions = require("./functions");

let setHomepage = (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
};

let queryHandle = (req, res) => {
  let date = Functions.formatDate(req.params.date);
  if(date == "Invalid date"){
      console.log(date)
      res.status(404).send(date)
  }
  else{
      console.log(date)
      res.status(200).send(date)
  }
};

module.exports = {
  setHomepage,
  queryHandle,
};

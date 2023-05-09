const express = require("express");
const cors = require("cors");
const boardGameControllers = require("./controllers")
const app = express();


app.get("/", (request, response) => {
    response.send("Hello World key");
  });

  app.get("/:index", (request, response) => {
    response.send("Hello Universe!");
  });  
 
  module.exports = app;
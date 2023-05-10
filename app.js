const cors = require("cors");
const express = require("express");

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Routes
const boardgamesController = require("./controllers/boardgameController.js");
app.use("/boardgames", boardgamesController);

app.get("/", (request, response) => {
    response.send("Welcome to Board, not bored");
  });

  app.get("/:index", (request, response) => {
    response.send("Hello Universe!");
  });  

  //404 page 
  app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });
 
  module.exports = app;
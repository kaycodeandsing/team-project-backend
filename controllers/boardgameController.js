const express = require("express");
const boardgames = express.Router();
const { getAllBoardgames } = require("../queries/boardgames");

boardgames.get ("/", async (request, response) => {
    const allBoardgames = await getAllBoardgames();
    if (allBoardgames[0]){
        response.status(200).json(allBoardgames);
    } else {
        response.status(500).json({error: "server error"});
    }
});



module.exports = boardgames;
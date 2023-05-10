const express = require("express");
const boardgames = express.Router();
const {
     getAllBoardgames,
    // getBoardgame,
    // createBoardgame,
     deleteBoardgame,
     updateBoardgame,
 } = require("../queries/boardgames");

boardgames.get ("/", async (request, response) => {
    const allBoardgames = await getAllBoardgames();
    if (allBoardgames[0]){
        response.status(200).json(allBoardgames);
    } else {
        response.status(500).json({error: "server error"});
    }
});

boardgames.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedBoardgame = await deleteBoardgame(id);
    if (deletedBoardgame){
        res.status(200).json(deletedBoardgame);
    } else {
        res.status(404).json("Bookmark not found");
    }
});

boardgames.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedBoardgame = await updateBoardgame(id, req.body);
    res.status(200).json(updatedBoardgame);
});




module.exports = boardgames;
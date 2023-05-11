const express = require("express");
const boardgames = express.Router();
const { checkBoolean, checkName } = require("../validations/checkBoardgames.js");
const {
     getAllBoardgames,
     getBoardgame,
     createBoardgame,
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

boardgames.get ("/:id", async (req, res) => {
    const { id } = req.params;
    const boardgame = await getBoardgame(id);
    if (boardgame){
        res.json(boardgame);
    } else {
        res.status(404).json({ error: "not found"});
    }
});

boardgames.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedBoardgame = await deleteBoardgame(id);
    if (deletedBoardgame){
        res.status(200).json(deletedBoardgame);
    } else {
        res.status(404).json("Board game not found");
    }
});

boardgames.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedBoardgame = await updateBoardgame(id, req.body);
    res.status(200).json(updatedBoardgame);
});

boardgames.post("/",checkBoolean,checkName, async (req,res) => {
    try {
        const boardgame = await createBoardgame(req.body);
        res.json(boardgame);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});




module.exports = boardgames;
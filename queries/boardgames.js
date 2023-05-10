const db = require("../db/dbConfig.js");

const getAllBoardgames = async () => {
    try {
        const allBoardgames = await db.any("SELECT * FROM boardgames");
        return allBoardgames;
    } catch (error){
        return error;
    }
};

const deleteBoardgame = async (id) => {
    try {
        const deletedBoardgame = await db.one(
            "DELETE FROM boardgames WHERE id = $1 RETURNING *",
            id
        );
        return deletedBoardgame; 
    } catch (error){
        return error;
    }
};

const updateBoardgame = async (id, boardgame) => {
    try {
        const updatedBoardgame = await db.one(
            "UPDATE boardgames SET name =$1, players=$2, level=$3, duration=$4, two_more=$5 where id=$6 RETURNING *",
            [boardgame.name, boardgame.players, boardgame.level, boardgame.duration, boardgame.two_more, id]
        );
        return updatedBoardgame
    }catch (error){
        return error;
    }
}

module.exports = {
    getAllBoardgames,
    // getBoardgame,
    // createBoardgame,
    deleteBoardgame,
    updateBoardgame,
};
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
};

const getBoardgame = async () => {
    try {
        const oneBoardgame = await db.one("SELECT * FROM boardgames WHERE id=$1", id);
        return oneBoardgame;
      } catch (error) {
        return error;
      }
};

const createBoardgame = async (boardgame) => {
    try {
        const newBoardgame = await db.one(
            "INSERT INTO boardgames (name, players, level, duration, two_more) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [boardgame.name, boardgame.players, boardgame.level, boardgame.duration, boardgame.two_more]
          );
          return newBoardgame;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllBoardgames,
    getBoardgame,
    createBoardgame,
    deleteBoardgame,
    updateBoardgame,
};
const db = require("../db/dbConfig.js");

const getAllBoardgames = async () => {
    try {
        const allBoardgames = await db.any("SELECT * FROM boardgames");
        return allBoardgames;
    } catch (error){
        return error;
    }
};

module.exports = {getAllBoardgames};
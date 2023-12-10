const express = require("express");
const router = express.Router();
const {
    getBoard,
    getAllBoards,
    createBoard,
} = require("../controllers/boardController");
const protected = require("../middleware/authMiddleware");

router.get("/getAll", protected, getAllBoards);
router.get("/getBoard/:id", protected, getBoard);
router.post("/create", protected, createBoard);

module.exports = router;

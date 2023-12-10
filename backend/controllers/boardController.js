const asyncHandler = require("express-async-handler");
const Board = require("../models/boardModel");

const getBoard = asyncHandler(async (req, res) => {
    const boardId = req.params.id;

    const board = await Board.findOne({ boardId });

    if (board) {
        res.json({
            _id: board._id,
            name: board.name,
            columns: board.columns,
        });
    }

    // if (board) {
    //     res.json(123);
    // }
});

const getAllBoards = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const boards = await Board.find({ userId });

    if (boards) {
        res.json(boards).select("-columns");
    }
});

const createBoard = asyncHandler(async (req, res) => {
    const { name, columns } = req.body;
    const userId = req.user._id;

    const board = await Board.create({ name, columns, userId });

    if (board) {
        res.status(201).json({
            _id: board._id,
            name: board.name,
            columns: board.columns,
        });
    } else {
        res.status(400);
        throw new Error("Invalid data");
    }
});

module.exports = { getBoard, getAllBoards, createBoard };

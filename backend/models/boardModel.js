const mongoose = require("mongoose");

const boardSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        columns: { type: [String], required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
    }
);

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;

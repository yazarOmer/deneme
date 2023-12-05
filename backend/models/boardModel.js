const mongoose = require("mongoose");

const boardSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        columns: [
            {
                type: mongoose.Schema.Types.String,
            },
        ],
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
    }
);

const Board = mongoose.model("Board", boardSchema);

export default Board;

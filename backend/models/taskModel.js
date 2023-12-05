const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    subtasks: [{ text: String, isCompleted: Boolean }],
    status: {
        type: String,
        required: true,
    },
    boardId: { type: mongoose.Schema.Types.ObjectId, ref: "Board" },
});

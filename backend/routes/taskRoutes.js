const express = require("express");
const router = express.Router();
const {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
} = require("../controllers/taskController");
const protected = require("../middleware/authMiddleware");

router.post("/create", protected, createTask);
router.get("/getAll/:id", protected, getAllTasks);
router.get("/getTask/:id", protected, getTask);
router.put("/getTask/:id", protected, updateTask);

module.exports = router;

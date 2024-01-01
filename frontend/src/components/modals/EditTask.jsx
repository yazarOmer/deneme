import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    updateTask,
    getAllTasks,
    reset,
} from "../../redux/features/task/taskSlice";
import { useParams } from "react-router-dom";

const EditTask = ({ closeModal }) => {
    const { selectedBoard } = useSelector((state) => state.board);
    const { selectedTask } = useSelector((state) => state.task);

    const [title, setTitle] = useState(selectedTask.name);
    const [description, setDescription] = useState(selectedTask.description);
    const [subtasks, setSubtasks] = useState(selectedTask.subtasks);
    const [status, setStatus] = useState(selectedTask.status);
    // const { id } = useParams();
    const id = selectedTask._id;

    const dispatch = useDispatch();

    const data = { title, description, subtasks, status, id };

    const handleInputChange = (id, event) => {
        const newFormValues = subtasks.map((input, i) =>
            i === id ? { ...input, text: event.target.value } : input
        );
        setSubtasks(newFormValues);
    };

    const handleDelete = (id) => {
        const newSubtasks = subtasks.filter((sub) => sub.id !== id);
        setSubtasks(newSubtasks);
    };

    const handleUpdate = () => {
        dispatch(updateTask(data));
        dispatch(getAllTasks(selectedBoard?._id));
        closeModal(false);
    };

    return (
        <div className="fixed z-10 inset-0 bg-black-color/50 flex items-center justify-center">
            <div className="w-[480px]  flex flex-col p-8 bg-dark-grey rounded-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-semibold text-white-color">
                        Edit Task
                    </h1>
                    <IoClose
                        onClick={() => closeModal(false)}
                        size={32}
                        className="text-medium-grey hover:bg-dark-border transition cursor-pointer rounded-full"
                    />
                </div>

                <label
                    htmlFor=""
                    className="font-bold text-xs text-white-color mt-8 mb-2"
                >
                    Title
                </label>
                <input
                    type="text"
                    value={selectedTask?.name}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Take coffee break"
                    className="rounded-md p-2 text-sm border border-medium-grey/25 outline-none text-white-color bg-dark-grey"
                />

                <label
                    htmlFor=""
                    className="font-bold text-xs text-white-color mt-8 mb-2"
                >
                    Description
                </label>
                <textarea
                    type=""
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
                    className="rounded-md h-24 text-left p-2 text-sm border border-medium-grey/25 outline-none text-white-color bg-dark-grey"
                />

                <label
                    htmlFor=""
                    className="font-bold text-xs text-white-color mt-6 mb-2"
                >
                    Subtasks
                </label>

                {subtasks.map((subtask, i) => {
                    return (
                        <div key={i} className="flex items-center gap-1 mb-2">
                            <input
                                type="text"
                                value={subtask.text}
                                onChange={(e) => handleInputChange(i, e)}
                                className="rounded-md w-full p-2 text-sm border border-medium-grey/25 outline-none text-white-color bg-dark-grey"
                            />
                            <button onClick={() => handleDelete(subtask.id)}>
                                <IoClose
                                    size={32}
                                    className="text-medium-grey hover:bg-dark-border transition cursor-pointer rounded-full"
                                />
                            </button>
                        </div>
                    );
                })}

                <button
                    onClick={() =>
                        setSubtasks((prev) => [
                            ...prev,
                            { text: "", isCompleted: false, id: Math.random() },
                        ])
                    }
                    className="w-full py-2.5 text-main-purple text-sm font-bold bg-white-color hover:bg-main-purple hover:text-white-color transition rounded-[20px] mt-3"
                >
                    + Add New Subtask
                </button>

                <label
                    htmlFor=""
                    className="font-bold text-xs text-white-color mt-6 mb-2"
                >
                    Status
                </label>

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="bg-dark-grey outline-none p-2 text-sm text-white-color border border-medium-grey/25 rounded-md accent-main-purple-main-purple"
                >
                    <option value="">Select</option>
                    {selectedBoard?.columns?.map((col) => (
                        <option
                            key={col._id}
                            value={col.name}
                            className="text-medium-grey text-sm font-semibold mb-2"
                        >
                            {col.name}
                        </option>
                    ))}
                </select>

                <button
                    onClick={() => handleUpdate()}
                    className="w-full py-2.5 text-white-color text-sm font-bold bg-main-purple hover:bg-main-purple-hover  transition rounded-[20px] mt-4"
                >
                    Update Task
                </button>
            </div>
        </div>
    );
};

export default EditTask;

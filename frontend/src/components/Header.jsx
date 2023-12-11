import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import kanbanLogo from "../assets/kanban-logo.svg";
import options from "../assets/options.svg";
import { useDispatch, useSelector } from "react-redux";
import { getBoard, reset } from "../redux/features/board/boardSlice";
import AddTask from "./modals/AddTask";

const Header = ({ navbarOpen }) => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const [showAddTask, setShowAddTask] = useState(false);

    const { selectedBoard } = useSelector((state) => state.board);

    useEffect(() => {
        dispatch(reset());
        dispatch(getBoard(id));
    }, [id]);

    if (showAddTask) {
        return <AddTask closeModal={setShowAddTask} />;
    }

    return (
        <header
            className={`${
                !navbarOpen
                    ? "w-[calc(100%-300px)] fixed left-[300px] transition-all duration-500"
                    : "w-full"
            } bg-dark-grey h-24 flex items-center`}
        >
            {navbarOpen && (
                <Link className="flex items-center gap-2 px-6 text-3xl font-bold text-white-color">
                    <img src={kanbanLogo} alt="" />
                    kanban
                </Link>
            )}
            <div
                className={`flex items-center justify-between w-full ml-5 ${
                    navbarOpen ? "border-l px-4 border-[#979797]/25" : ""
                } h-24`}
            >
                <h3 className="text-2xl font-bold text-white-color capitalize">
                    {selectedBoard ? selectedBoard.name : ""}
                </h3>
                <div className="flex items-center gap-2">
                    <button
                        disabled={selectedBoard?.columns?.length == 0}
                        onClick={() => setShowAddTask(true)}
                        className={`bg-main-purple hover:bg-main-purple-hover ${
                            id
                                ? "bg-main-purple hover:bg-main-purple-hover text-white-color"
                                : "bg-main-purple/25 cursor-not-allowed text-medium-grey hover:bg-main-purple/25"
                        } transition disabled:cursor-not-allowed disabled:bg-main-purple-hover h-10 px-4 rounded-3xl  font-semibold text-sm`}
                    >
                        Add New Task
                    </button>
                    <button
                        className={`w-10 h-10 flex items-center justify-center ${
                            id ? "hover:bg-dark-border" : "cursor-not-allowed"
                        } rounded-full  transition`}
                    >
                        <img src={options} alt="" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

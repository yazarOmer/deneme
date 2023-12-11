import React from "react";

const TaskCard = ({ task }) => {
    return (
        <div className="w-full bg-dark-grey rounded-lg mb-3 px-4 py-5 hover:cursor-pointer drop-shadow-task group">
            <p className="text-sm text-white-color font-bold tracking-wider mb-2 group-hover:text-main-purple  transition-all">
                {task.title}
            </p>
            <p className="text-xs text-medium-grey font-bold">
                {`${
                    task.subtasks.filter((sub) => sub.isCompleted == true)
                        .length
                } of ${task.subtasks.length} subtasks`}
            </p>
        </div>
    );
};

export default TaskCard;

import { useTasks } from "@/context/taskContext";
import { edit, star, trash } from "@/utils/Icons";
import { Task } from "@/utils/types";
import { formatTime } from "@/utils/utilities";
import React from "react";
import { motion } from "framer-motion";
import { item } from "@/utils/animations";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      case "high":
        return "text-red-500";
      default:
        return "text-red-500";
    }
  };

  const { getTask, openModalForEdit, deleteTask, modalMode } = useTasks();

  return (
    <motion.div
      className="px-4 py-3 flex flex-col gap-4 shadow-sm bg-[#f9f9f9] rounded-lg border-2 border-white
                 h-[16rem] sm:h-auto lg:h-[18rem]"
      variants={item}
    >
      <div>
        <h4 className="font-bold text-xl sm:text-2xl lg:text-3xl truncate">
          {task.title}
        </h4>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
          {task.description}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap justify-between items-center gap-2">
        <p className="text-xs sm:text-sm lg:text-base text-gray-400">
          {formatTime(task.createdAt)}
        </p>
        <p
          className={`text-xs sm:text-sm lg:text-base font-bold ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </p>
        <div className="flex items-center gap-2 sm:gap-3 text-gray-400 text-[1.2rem]">
          <button
            aria-label={`Mark as ${
              task.completed ? "not completed" : "completed"
            }`}
            className={`${
              task.completed ? "text-yellow-400" : "text-gray-400"
            }`}
          >
            {star}
          </button>
          <button
            aria-label="Edit task"
            className="text-[#00A1F1]"
            onClick={() => {
              getTask(task._id);
              openModalForEdit(task);
            }}
          >
            {edit}
          </button>
          <button
            aria-label="Delete task"
            className="text-[#F65314]"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            {trash}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskItem;

"use client";
import { useTasks } from "@/context/taskContext";
import useRedirect from "@/hooks/useUserRedirect";
import Filters from "./Components/Filters/Filters";
import TaskItem from "./Components/TaskItem/TaskItem";
import { Task } from "@/utils/types";
import { filteredTasks } from "@/utils/utilities";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { container, item } from "@/utils/animations";

export default function Home() {
  useRedirect("/login");

  const { tasks, openModalForAdd, priority, setPriority } = useTasks();
  const filtered = filteredTasks(tasks, priority);

  useEffect(() => {
    setPriority("all");
  }, []);

  return (
    <main className="m-6 h-full flex flex-col">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <Filters />
      </div>

      {/* Scrollable container */}
      <div className="flex-1 h-[calc(100vh-4rem)] overflow-y-auto p-4">
        <motion.div
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((task: Task, i: number) => (
            <TaskItem key={i} task={task} />
          ))}

          {/* Add New Task Button */}
          <motion.button
            className="h-[16rem] sm:h-auto lg:h-[18rem] px-6 py-4 flex flex-col justify-center items-center gap-6 shadow-lg bg-gradient-to-r from-[#00A1F1] to-[#3aafae] rounded-lg border-2 border-transparent
            hover:bg-gradient-to-r hover:from-[#3aafae] hover:to-[#00A1F1] text-white transition-all duration-300 ease-in-out"
            onClick={openModalForAdd}
            variants={item}
          >
            <h4 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-center">
              Add New Task
            </h4>
            <p className="text-sm sm:text-base lg:text-lg text-center">
              Start tracking your tasks now.
            </p>
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}

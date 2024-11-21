"use client";
import { useTasks } from "@/context/taskContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import React, { useEffect } from "react";

function Modal() {
  const {
    task,
    handleInput,
    createTask,
    isEditing,
    closeModal,
    modalMode,
    activeTask,
    updateTask,
  } = useTasks();
  const ref = React.useRef(null);

  // Use the hook to detect clicks outside the modal
  useDetectOutside({
    ref,
    callback: () => {
      if (isEditing) {
        closeModal(); // Close modal if it is in add/edit mode
      }
    },
  });

  useEffect(() => {
    if (modalMode === "edit" && activeTask) {
      handleInput("setTask")(activeTask);
    }
  }, [modalMode, activeTask]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (modalMode === "edit") {
      updateTask(task);
    } else if (modalMode === "add") {
      createTask(task);
    }
    closeModal();
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#333]/40 overflow-hidden">
      <form
        action=""
        className="py-6 px-10 max-w-[95%] sm:max-w-[800px] w-full flex flex-col gap-6 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl transition-all duration-300 max-h-[80vh] overflow-y-auto"
        onSubmit={handleSubmit}
        ref={ref}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="title" className="text-lg font-semibold">
            Title
          </label>
          <input
            className="bg-[#F9F9F9] p-3 rounded-md border border-[#E0E0E0] text-sm sm:text-base focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
            type="text"
            id="title"
            placeholder="Task Title"
            name="title"
            value={task.title}
            onChange={(e) => handleInput("title")(e)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="description" className="text-lg font-semibold">
            Description
          </label>
          <textarea
            className="bg-[#F9F9F9] p-3 rounded-md border border-[#E0E0E0] text-sm sm:text-base resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
            name="description"
            placeholder="Task Description"
            rows={4}
            value={task.description}
            onChange={(e) => handleInput("description")(e)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="priority" className="text-lg font-semibold">
            Priority
          </label>
          <select
            className="bg-[#F9F9F9] p-3 rounded-md border border-[#E0E0E0] text-sm sm:text-base cursor-pointer focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
            name="priority"
            value={task.priority}
            onChange={(e) => handleInput("priority")(e)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="dueDate" className="text-lg font-semibold">
            Due Date
          </label>
          <input
            className="bg-[#F9F9F9] p-3 rounded-md border border-[#E0E0E0] text-sm sm:text-base focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={(e) => handleInput("dueDate")(e)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="completed" className="text-lg font-semibold">
            Task Completed
          </label>
          <div className="flex items-center justify-between bg-[#F9F9F9] p-3 rounded-md border border-[#E0E0E0]">
            <label htmlFor="completed" className="text-sm sm:text-base">
              Completed
            </label>
            <div>
              <select
                className="bg-[#F9F9F9] p-2 rounded-md border text-sm sm:text-base cursor-pointer focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
                name="completed"
                value={task.completed ? "true" : "false"}
                onChange={(e) => handleInput("completed")(e)}
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className={`text-white py-3 rounded-md w-full text-lg font-semibold hover:opacity-90 transition-all duration-200 ease-in-out ${
              modalMode === "edit" ? "bg-blue-400" : "bg-green-400"
            }`}
          >
            {modalMode === "edit" ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;

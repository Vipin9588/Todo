import React from "react";
import useTodo from "../hook/useTodo";
import useStore from "../hook/useStore";

export default function Header() {
  const {
    todoList,
    setTodoList,
    newTask,
    updatedFlag,
    setNewTask,
    setUpdatedFlag,
  } = useTodo();

  useStore(todoList);

  const handleTask = (): void => {
    if (!newTask.trim()) {
      alert("Please enter a task");
      return;
    }

    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newTask,
      },
    ]);

    setNewTask("");
  };

  const handleUpdate = (): void => {
    if (!updatedFlag) return;

    const updatedList = todoList.map((item) =>
      item.id === updatedFlag.id
        ? { ...item, title: newTask }
        : item
    );

    setTodoList(updatedList);
    setUpdatedFlag(null);
    setNewTask("");
  };

  return (
    <div className="max-w-3xl mx-auto pt-2">
      <h1 className="text-4xl font-bold text-center mb-8">
        Task Manager
      </h1>

      <div className="flex gap-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={updatedFlag ? handleUpdate : handleTask}
          className={`px-6 py-3 rounded-lg font-semibold text-white transition ${
            updatedFlag
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {updatedFlag ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
}
import React from "react";
import useTodo from "../hook/useTodo";
import useStore from "../hook/useStore";
export default function Main() {
  const { todoList, setTodoList ,newTask,setUpdatedFlag,setNewTask} = useTodo();
         useStore(todoList);

    const handleDelete = (id: number): void => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
    }

    const handleEdit = (id: number): void => {
      const task = todoList.find((item) => item.id === id);
      setNewTask(task ? task.title : "");
      if(task){
      setUpdatedFlag(task);
    }
  }


  return (
  <div className="max-w-3xl mx-auto mt-8 max-h-[70vh] overflow-scroll scrollbar-none
 scrollbar-thumb-yellow-500">
    {todoList.length === 0 ? (
      <div className="bg-white rounded-2xl shadow-md p-10 text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          No Tasks Yet 🚀
        </h2>
        <p className="text-gray-500 mt-2">
          Add your first task to get started.
        </p>
      </div>
    ) : (
      <ul className="space-y-4">
        {todoList.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300 p-5 flex items-center justify-between"
          >
            <div>
              <h3 className="font-medium text-lg text-gray-800">
                {item.title}
              </h3>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleEdit(item.id)}
                className="px-4 py-2 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);
}

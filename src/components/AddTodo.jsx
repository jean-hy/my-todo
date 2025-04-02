import { useState } from "react";

export default function AddToDo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          className="w-full px-6 py-4 text-lg bg-white/50 backdrop-blur-sm border-2 border-indigo-100 rounded-xl 
                     focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 
                     placeholder-gray-400 transition-all duration-200"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 
                     text-white px-6 py-2 rounded-lg font-medium shadow-lg shadow-indigo-200 
                     hover:shadow-xl hover:shadow-indigo-300 hover:scale-105 
                     transition-all duration-200 flex items-center gap-2"
        >
          <span>Add Task</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

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
          className="w-full px-6 py-4 text-lg bg-[#edfffc]/50 backdrop-blur-sm border-2 border-[#97fce4] rounded-xl 
                     focus:outline-none focus:border-[#0f3933] focus:ring-2 focus:ring-[#97fce4]/30 
                     placeholder-[#b0c5c1] transition-all duration-200"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0f3933] hover:bg-[#02231e]
                     text-[#edfffc] px-6 py-2 rounded-lg font-medium shadow-lg shadow-[#0f3933]/20 
                     hover:shadow-xl hover:shadow-[#0f3933]/30 hover:scale-105 
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

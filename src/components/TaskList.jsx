import { useState } from "react";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-[#b0c5c1] mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <p className="text-[#b0c5c1] text-lg">
          No tasks yet. Add one to get started!
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="group bg-[#edfffc]/50 backdrop-blur-sm rounded-xl p-4 border border-[#97fce4] 
                     hover:border-[#0f3933] hover:shadow-md transition-all duration-200"
        >
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  const handleSave = () => {
    if (editValue.trim()) {
      onChange({
        ...todo,
        title: editValue.trim(),
      });
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditValue(todo.title);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
        className="w-5 h-5 rounded-full border-2 border-[#97fce4] text-[#0f3933] 
                   focus:ring-[#97fce4] focus:ring-offset-2 transition-colors duration-200"
      />

      {isEditing ? (
        <div className="flex-1 flex gap-2">
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-4 py-2 bg-[#edfffc]/80 border-2 border-[#97fce4] rounded-lg 
                       focus:outline-none focus:border-[#0f3933] focus:ring-2 focus:ring-[#97fce4]/30"
            autoFocus
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#0f3933] hover:bg-[#02231e] text-[#edfffc] rounded-lg 
                       shadow-sm hover:shadow-md transition-all duration-200"
          >
            Save
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setEditValue(todo.title);
            }}
            className="px-4 py-2 bg-[#b0c5c1] hover:bg-[#97fce4] text-[#02231e] rounded-lg 
                       shadow-sm hover:shadow-md transition-all duration-200"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-between">
          <span
            className={`text-lg ${
              todo.done ? "line-through text-[#b0c5c1]" : "text-[#0f3933]"
            }`}
          >
            {todo.title}
          </span>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-[#0f3933] hover:text-[#02231e] hover:bg-[#97fce4]/20 
                         rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-2 text-[#0f3933] hover:text-[#02231e] hover:bg-[#97fce4]/20 
                         rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

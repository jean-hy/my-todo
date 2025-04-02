import { useState } from "react";
import AddToDo from "./components/AddTodo";
import TaskList from "./components/TaskList";
import Title from "./components/Title";

let nextId = 3;

const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Buy eggs", done: false },
  { id: 2, title: "Buy bread", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Title />
          <h1 className="text-3xl font-bold text-gray-800 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            What do you want to do today?
          </h1>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="mb-8">
            <AddToDo onAddTodo={handleAddTodo} />
          </div>
          <TaskList
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

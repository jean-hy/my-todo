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
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
    <div className="min-h-screen bg-gradient-to-br from-[#02231e] via-[#0f3933] to-[#0f3933] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Title />

          <h1 className="text-3xl font-bold text-[#edfffc] mt-4">
            What do you want to accomplish today?
          </h1>
          <p className="text-gray-200 mt-2 text-lg">Today is {formattedDate}</p>
        </div>

        <div className="bg-[#edfffc]/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-[#97fce4]/20">
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

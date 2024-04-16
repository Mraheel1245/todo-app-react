import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        text: inputValue.trim(),
      };
      setTodos([newTodo, ...todos]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Todo"
          className="flex-1 px-3 py-2 border rounded-l focus:outline-none"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Add Todo
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

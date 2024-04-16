import React, { useState } from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onEdit(todo.id, editedText);
    setEditMode(false);
  };

  return (
    <li className="flex justify-between items-center px-3 py-2 bg-gray-100 rounded">
      {editMode ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-1 px-2 py-1 border rounded focus:outline-none"
          />
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <div>
            <button
              onClick={handleEdit}
              className="px-2 py-1 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;

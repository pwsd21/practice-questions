import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleTodo } from "./todoSlice";

const TodoList = () => {
  const todos = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          ></input>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

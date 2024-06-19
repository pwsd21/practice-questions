import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./todoSlice";

const Addtodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(text.trim()));
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Addtodo;

import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Addtodo from "./Addtodo";
import TodoList from "./TodoList";

const Main = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>To Do List</h1>
        <Addtodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default Main;

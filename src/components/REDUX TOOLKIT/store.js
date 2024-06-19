import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducers: {
    todo: todoReducer,
  },
});

export default store;

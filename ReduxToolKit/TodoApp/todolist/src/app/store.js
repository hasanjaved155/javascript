import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todoreducer/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

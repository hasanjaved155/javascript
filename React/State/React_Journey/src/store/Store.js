import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../reducerComp/TodoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

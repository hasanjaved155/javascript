import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      text: "add task here",
    },
  ],
};

export const TodoSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducer: {
    addTask(state, action) {
      const task = {
        id: nanoid(),
        text: action.payload,
      };
      state.tasks.push(task);
    },
  },
  reducer: {
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = TodoSlice.actions;
export default TodoSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialTodoState = {
  todos: [
    {
      id: "1",
      text: "Hello Javed Wanna learn Redux Toolkit? so add starting todos",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        const todo = {
          id: nanoid(),
          text: action.payload,
        };
        state.todos.push(todo);
      },
    },
    removeTodo: {
      reducer(state, action) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
    },
    toggleTodo: {
      reducer(state, action) {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;

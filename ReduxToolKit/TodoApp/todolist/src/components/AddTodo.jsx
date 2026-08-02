import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoreducer/todoSlice";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12">
      <div
        onClick={(e) => e.target === e.currentTarget && addTodoHandler(e)}
        className="bg-linear-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl p-8"
      >
        <div className="flex gap-3">
          <input
            type="text"
            className="flex-1 bg-teal-100 border-2 border-purple-500/30 hover:border-purple-500/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-800 outline-none transition-all duration-300 text-base"
            placeholder="✨ Enter a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addTodoHandler(e);
              }
            }}
          />
          <button
            type="submit"
            onClick={addTodoHandler}
            className="bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
          >
            <span className="text-xl">+</span>
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

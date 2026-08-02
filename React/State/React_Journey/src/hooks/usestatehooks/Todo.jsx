import React from "react";

const Todo = () => {
  const [todos, setTodos] = React.useState({ input: "", addTodo: [] });
  const submit = (e) => {
    if (todos.input.trim() === "") return;
    setTodos({
      input: "",
      addTodo: [...todos.addTodo, todos.input],
    });
  };

  const deleteTodo = (index) => {
    setTodos({
      ...todos,
      addTodo: todos.addTodo.filter((_, i) => i !== index),
    });
  };

  return (
    <div>
      <input
        type="text"
        value={todos.input}
        onChange={(e) => setTodos({ ...todos, input: e.target.value })}
      />
      <button onClick={submit}>Add</button>
      <ui>
        {todos.addTodo.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ui>
    </div>
  );
};

export default Todo;

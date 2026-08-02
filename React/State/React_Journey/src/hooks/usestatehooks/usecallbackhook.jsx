import React, { useState, useCallback } from "react";

// ## useCallback Hook in React

// The `useCallback` hook is a built-in hook in React that is used for performance optimization.
// It memoizes a callback function, which means it returns a memoized version of the callback that only
// changes if one of the dependencies has changed. This is useful when passing callbacks to
// optimized child components that rely on reference equality to prevent unnecessary renders.

// ### Why do we need `useCallback`?

// In JavaScript, functions are objects. When a component re-renders, any functions defined inside it
// are recreated. This means that even if the function has the same code, it's a new function object
// in memory.

// When you pass a function as a prop to a child component, and the parent component re-renders,
// the child component will receive a new function prop. If the child component is wrapped in
// `React.memo`, it will still re-render because the prop (the function) has changed (it's a new
// reference).

// `useCallback` solves this problem by returning the same function object between renders, as long
// as its dependencies haven't changed.

// ### Syntax
// ```javascript
// const memoizedCallback = useCallback(
//   () => {
//     doSomething(a, b);
//   },
//   [a, b],
// );
// ```
// - The first argument is the function to be memoized.
// - The second argument is a dependency array. The memoized function will only be recreated if one of
//   the dependencies in the array changes.

// ---

// ### Example

// In this example, we have a `ParentComponent` that has a state for a theme and a state for a count.
// There is a `ChildComponent` that takes a function `onIncrement` as a prop.
const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("ChildComponent re-rendered");
  return (
    <div>
      <p>This is the child component.</p>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
});

const Child2 = React.memo(({ onIncrement }) => {
  console.log("Child2 re-rendered");
  return (
    <div>
      <p>This is the child component.</p>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
});

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // Without useCallback, a new handleIncrement function is created on every render of ParentComponent.
  // This causes ChildComponent to re-render even when we just change the theme, because the onIncrement
  // prop is a new function reference.
  const handleIncrementWithoutCallback = () => {
    setCount((c) => c + 1);
  };

  // With useCallback, the handleIncrement function is memoized. It will only be recreated if
  // a dependency in the dependency array changes. Here, the dependency array is empty, so the
  // function is created only once.
  const handleIncrementWithCallback = useCallback(() => {
    setCount((c) => c + 1);
  }, [count]);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      <h1>useCallback Hook Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <hr />

      <h3>Child with function prop without useCallback</h3>
      <p>
        Open the console. When you toggle the theme, you will see
        "ChildComponent re-rendered" logged.
      </p>
      <ChildComponent onIncrement={handleIncrementWithoutCallback} />

      <hr />

      <h3>Child with function prop with useCallback</h3>
      <p>
        Open the console. When you toggle the theme, the child component will
        NOT re-render.
      </p>
      <Child2 onIncrement={handleIncrementWithCallback} />
    </div>
  );
};

export default UseCallbackHook;

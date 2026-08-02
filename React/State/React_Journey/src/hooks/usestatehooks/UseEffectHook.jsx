import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  console.log("1. Component rendering...");

  useEffect(() => {
    console.log("Effect run on every render! Count:", count);
  });

  useEffect(() => {
    console.log("Effect run only first time! Count:", count);
  }, []);

  useEffect(() => {
    console.log("Effect run when count changes! Count:", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default UseEffectHook;

// ```

// **Console Output (first time):**
// ```
// 1. Component rendering...
// (Screen pe UI dikha)
// 2. Effect chala! Count: 0
// ```

// **Button दबाने पर:**
// ```
// 1. Component rendering...
// (Screen pe updated UI)
// 2. Effect chala! Count: 1

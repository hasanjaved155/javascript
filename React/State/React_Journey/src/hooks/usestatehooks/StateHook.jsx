import React from "react";

// hooks in react are special functions that let us "hook into" react features
// like state and lifecycle methods
// useState is a hook that allows us to add state to functional components
// state is a built-in object that stores property values that belong to the component
// so basically state is used to manage the data in react components
// and when the state changes the component re-renders to reflect the updated state in the UI
// useState is a hook that allows us to add state to functional components
// difference beteween state and useState is that state is the actual data
// and useState is the hook that allows us to manage that data in functional components

const StateHook = () => {
  // without useState hook

  // This approach does not update the component state properly
  // because React does not re-render the component when the variable changes.
  // Hence, the UI will not reflect the updated count value.
  // To manage state correctly in React, we should use the useState hook.
  // let count = 0;
  // return (
  //   <div>
  //     <p>count : {count}</p>
  //     <button
  //       onClick={() => {
  //         count += 1;
  //         console.log(count);
  //       }}
  //     ></button>
  //   </div>
  // );

  // with useState hook
  // useState hook returns an array with two elements:
  // 1. The current state value (count)
  // 2. A function to update that state value (setCount)
  // When we call setCount with a new value, React knows that the state has changed
  // and re-renders the component to reflect the updated state in the UI.
  // This is the correct way to manage state in functional components using React.
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
    </div>
  );
};

export default StateHook;

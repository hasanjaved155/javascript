import React, { Fragment, useEffect, useRef } from "react";

const UseRefHook = () => {
  const ref = useRef(0);
  const textRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    console.log("evertime");
  }, []);

  return (
    <Fragment>
      <div ref={textRef}>{ref.current}</div>
      <button
        onClick={() => {
          ref.current++;
          textRef.current.innerText = ref.current;
        }}
      >
        +
      </button>
      <input ref={inputRef} />
    </Fragment>
  );
};

export default UseRefHook;

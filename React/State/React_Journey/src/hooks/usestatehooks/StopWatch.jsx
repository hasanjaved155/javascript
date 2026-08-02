import React from "react";

const StopWatch = () => {
  const [time, setTime] = React.useState(0);
  const timeRef = React.useRef(null);

  const handleStart = () => {
    if (timeRef.current !== null) return;

    timeRef.current = setInterval(() => {
      setTime((c) => c + 1);
    }, 1000);
  };

  const handlePause = () => {
    if (timeRef.current === null) return;
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const handleReset = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setTime(0);
  };

  return (
    <>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default StopWatch;

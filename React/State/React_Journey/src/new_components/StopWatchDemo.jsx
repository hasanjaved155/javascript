import React, { useRef, useState } from "react";

const StopWatchDemo = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timeRef = useRef(null);

  const start = () => {
    setRunning(true);
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const restart = () => {
    setRunning(false);
    setTime(0);
    clearInterval(timeRef.current);
  };

  const pause = () => {
    setRunning(false);
    clearInterval(timeRef.current);
  };

  // const format = (s) => {
  //   const min = Math.floor(s / 60);
  //   const sec = s % 60;
  //   return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  // };

  const format = (s) => {
    const min = Math.floor(s / 60000);
    const sec = Math.floor((s % 60000) / 1000);
    const micro = Math.floor((s % 1000) / 10);
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(micro).padStart(2, "0")}`;
  };
  return (
    <>
      <h1>{format(time)}</h1>
      <button onClick={start} disabled={running}>
        Start
      </button>
      <button onClick={restart}>Restart</button>
      <button onClick={pause} disabled={!running}>
        Pause
      </button>
    </>
  );
};

export default StopWatchDemo;

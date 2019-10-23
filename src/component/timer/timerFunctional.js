import React, { useState } from "react";
import styles from "../css/timer.module.css";

let interval = null;
function UseTimer() {
  let [value, setValue] = useState(0);
  let [started, setStarted] = useState(false);

  let start = () => {
    if (!interval) {
      setStarted((started = true));
      interval = setInterval(() => {
        setValue(prevValue => {
          return prevValue + 1;
        });
      }, 1000);
    }
  };

  let stop = () => {
    clearInterval(interval);
    interval = null;
    setStarted((started = false));
  };

  let reset = () => {
    stop();
    setValue((value = 0));
  };

  let toggle = () => {
    if (!interval) {
      start();
    } else {
      stop();
    }
  };

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={start} className={styles.button}>
        start
      </button>
      <button onClick={stop} className={styles.button}>
        stop
      </button>
      <button onClick={reset} className={styles.button}>
        reset
      </button>
      <button onClick={toggle} className={styles.button}>
        {started ? "toggle  stop" : "toggle  start"}
      </button>
    </div>
  );
}

export default UseTimer;

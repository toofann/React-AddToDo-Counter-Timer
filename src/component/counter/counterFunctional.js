import React, { useState } from "react";
import styles from "../css/counter.module.css";

function UseCounter() {
  let [value, setValue] = useState(0);

  let increment = () => {
    setValue(value + 1);
  };

  let decrement = () => {
    setValue(Math.max(0, value - 1));
  };

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={increment} className={styles.button}>
        icrement
      </button>
      <button onClick={decrement} className={styles.button}>
        decrement
      </button>
    </div>
  );
}
export default UseCounter;

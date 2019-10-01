import React, { useState } from "react";
import styles from "../css/cunter.module.css";

function CunterFunc() {
  let [value, setValue] = useState(0);

  let icrement = () => {
    setValue(value + 1);
  };

  let decrement = () => {
    setValue(Math.max(0, value - 1));
  };

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={icrement} className={styles.button}>
        icrement
      </button>
      <button onClick={decrement} className={styles.button}>
        decrement
      </button>
    </div>
  );
}
export default CunterFunc;

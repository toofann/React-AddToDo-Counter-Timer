import React, { Component } from "react";
import styles from "../css/counter.module.css";

class Counter extends Component {
  state = {
    value: 0
  };

  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  decrement = () => {
    this.setState({
      value: Math.max(0, this.state.value - 1)
    });
  };

  render() {
    let { value } = this.state;

    return (
      <div>
        <h2>{value}</h2>
        <button onClick={this.increment} className={styles.button}>
          icrement
        </button>
        <button onClick={this.decrement} className={styles.button}>
          decrement
        </button>
      </div>
    );
  }
}

export default Counter;

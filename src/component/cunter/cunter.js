import React, { Component } from "react";
import styles from "../css/cunter.module.css";

class Cunter extends Component {
  state = {
    value: 0
  };

  icrement = () => {
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
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.icrement} className={styles.button}>
          icrement
        </button>
        <button onClick={this.decrement} className={styles.button}>
          decrement
        </button>
      </div>
    );
  }
}

export default Cunter;

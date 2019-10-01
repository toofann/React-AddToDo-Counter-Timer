import React, { Component } from "react";
import styles from "../css/timer.module.css";

class Timer extends Component {
  state = {
    value: 0,
    started: false
  };

  interval = null;
  start = () => {
    if (!this.interval) this.setState({ started: true });
    this.interval = setInterval(() => {
      this.setState({
        value: this.state.value + 1
      });
    }, 1000);
  };

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({ started: false });
  };

  reset = () => {
    this.stop();
    this.setState({
      value: 0,
      started: false
    });
  };

  toggle = () => {
    if (!this.interval) {
      this.start();
    } else {
      this.stop();
    }
  };

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.start} className={styles.button}>
          start
        </button>
        <button onClick={this.stop} className={styles.button}>
          stop
        </button>
        <button onClick={this.reset} className={styles.button}>
          reset
        </button>
        <button onClick={this.toggle} className={styles.button}>
          {this.state.started ? "toggle stop" : "toggle start"}
        </button>
      </div>
    );
  }
}

export default Timer;

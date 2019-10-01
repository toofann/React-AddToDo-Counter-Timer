import React, { Component } from "react";
import styles from "../css/timer.module.css";

class AddToDoEdit extends Component {
  state = {
    editing: false,
    inputvalue: ""
  };

  editInput = () => {
    this.setState({
      editing: true,
      inputvalue: this.props.name
    });
  };

  save = () => {
    this.props.edit(this.state.inputvalue);
    this.setState({
      editing: false,
      inputvalue: ""
    });
  };

  handelchange = e => {
    this.setState({
      inputvalue: e.target.value
    });
  };

  Cancel = () => {
    this.setState({
      editing: false,
      inputvalue: ""
    });
  };

  render() {
    return (
      <li>
        {this.state.editing ? (
          <>
            <input
              value={this.state.inputvalue}
              onChange={this.handelchange}
            ></input>
            <button onClick={this.save} className={styles.btn}>
              save
            </button>
            <button onClick={this.Cancel} className={styles.btn}>
              cancel
            </button>
          </>
        ) : (
          <>
            <h3
              style={{
                textDecoration: this.props.done ? "line-through" : "none",
                display: "inline"
              }}
            >
              {this.props.name}
            </h3>
            <button onClick={this.props.handelDone} className={styles.btn}>
              done
            </button>
            <button onClick={this.editInput} className={styles.btn}>
              edit
            </button>
            <button onClick={this.props.handelDelete} className={styles.btn}>
              delete
            </button>
          </>
        )}
      </li>
    );
  }
}

export default AddToDoEdit;

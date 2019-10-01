import React, { Component } from "react";
import styles from "../css/timer.module.css";
import classNames from "classnames";
import AddToDoEdit from "./addToDoEdit";

let id = 0;
class AddToDo extends Component {
  state = {
    todo: [],
    inputvalue: "",
    started: false,
    filter: "all"
  };

  addToDO = () => {
    if (this.state.inputvalue)
      this.setState(prevstate => {
        return {
          todo: [
            ...prevstate.todo,
            { name: this.state.inputvalue, done: false, id: id++ }
          ],
          inputvalue: "",
          started: true
        };
      });
  };

  handelChange = e => {
    this.setState({
      inputvalue: e.target.value
    });
  };

  handelDone = index => {
    this.setState(prevstate => {
      return {
        todo: prevstate.todo.map((todo, i) => {
          if (i === index) return { ...todo, done: !todo.done };
          else return { ...todo };
        })
      };
    });
  };

  handelDelete = index => {
    this.setState(prevstate => {
      return {
        todo: [
          ...prevstate.todo.slice(0, index),
          ...prevstate.todo.slice(index + 1)
        ]
      };
    });
  };

  edit = (newName, index) => {
    this.setState(prevstate => {
      return {
        todo: prevstate.todo.map((todo, i) => {
          if (i === index) return { ...todo, name: newName };
          else return todo;
        })
      };
    });
  };

  getTodo = () => {
    switch (this.state.filter) {
      case "all":
        return this.state.todo;
      case "done":
        return this.state.todo.filter(todo => todo.done);
      case "undone":
        return this.state.todo.filter(todo => !todo.done);
      default:
        return this.state.done;
    }
  };

  setFilter = filtername => {
    this.setState({
      filter: filtername
    });
  };

  render() {
    return (
      <div>
        <ul style={{ padding: "50px", listStyle: "none" }}>
          {this.getTodo().map((todo, index) => (
            <AddToDoEdit
              {...todo}
              key={todo.id}
              handelDone={() => this.handelDone(index)}
              edit={newName => this.edit(newName, index)}
              handelDelete={() => this.handelDelete(index)}
            />
          ))}
        </ul>
        {this.state.started ? (
          <div style={{ padding: "10px" }}>
            <button
              onClick={() => this.setFilter("all")}
              className={classNames(styles.btn, {
                [styles.btnselect]: this.state.filter === "all"
              })}
            >
              all
            </button>
            <button
              onClick={() => this.setFilter("done")}
              className={classNames(styles.btn, {
                [styles.btnselect]: this.state.filter === "done"
              })}
            >
              done
            </button>
            <button
              onClick={() => this.setFilter("undone")}
              className={classNames(styles.btn, {
                [styles.btnselect]: this.state.filter === "undone"
              })}
            >
              un done
            </button>
          </div>
        ) : null}

        <div>
          <input
            value={this.state.inputvalue}
            onChange={this.handelChange}
          ></input>
          <button onClick={this.addToDO} className={styles.button}>
            add
          </button>
        </div>
      </div>
    );
  }
}

export default AddToDo;

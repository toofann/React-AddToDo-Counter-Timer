import React from "react";
import "./App.css";
import Timer from "./component/timer/timer";
import UseTimer from "./component/timer/timerFunctional";
import UseCounter from "./component/counter/counterFunctional";
import Counter from "./component/counter/counter.js";
import AddToDo from "./component/addTodo/addToDo";

function App() {
  return (
    <div className="App">
      <Counter />
      <UseCounter />
      <Timer />
      <UseTimer />
      <AddToDo />
    </div>
  );
}

export default App;

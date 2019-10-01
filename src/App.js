import React from "react";
import "./App.css";
import Timer from "./component/timer/timer";
import TimerFunc from "./component/timer/timerFunctional";
import CunterFunc from "./component/cunter/cunterFunctional";
import Cunter from "./component/cunter/cunter.js";
import AddToDo from "./component/addTodo/addToDo";

function App() {
  return (
    <div className="App">
      <Cunter />
      <CunterFunc />
      <Timer />
      <TimerFunc />
      <AddToDo />
    </div>
  );
}

export default App;

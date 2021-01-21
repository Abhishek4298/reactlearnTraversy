/* eslint-disable no-unused-vars */
import { useState } from "react"
import './App.css';
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "task1 work",
      day: "1st feb",
      reminder: "true"
    }, {
      id: "2",
      text: "task2 work",
      day: "15  feb",
      reminder: "true"
    }, {
      id: "3",
      text: "task3 work",
      day: "30 feb",
      reminder: "true"
    }

  ])
  return (
    <>
      <h1 style={{ color: "red" }}>
        <Header title="Task Tracking App" />
      </h1>

      <Tasks tasks={tasks} />
    </>
  );
}

export default App;

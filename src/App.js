/* eslint-disable no-unused-vars */
import { useState } from "react"
import './App.css';
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "task 1 work",
      day: "1st feb",
      reminder: "true"
    }, {
      id: "2",
      text: "task 2 work",
      day: "15  feb",
      reminder: "true"
    }, {
      id: "3",
      text: "task 3 work",
      day: "30 feb",
      reminder: "true"
    }

  ])
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div className="container">
      {/* <h1 style={{ color: "blue" }}> */}
      <Header title="Task Tracking App" />
      {/* </h1> */}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : "no Task Found"}

    </div >
  );
}

export default App;

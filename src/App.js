import React, {useState} from 'react'
import './App.css';
import Tasklist from './Tasklist';
function App() {
  const [task,setTask] = useState("");
  const [list_tasks, set_list_tasks] = useState([]);
  const changeHandler = e => {
    setTask(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault();
    const newtasks = [...list_tasks,task];
    set_list_tasks(newtasks);
    setTask("");
  }
  return (
    <div className="App">
      <center> 
        <div className = "card">
          <div className = "card-body">
            <h5 className = "card-title"> Task Manager </h5>
            <form onSubmit={submitHandler}>
              <input type="text" name = "task" value= {task} onChange={changeHandler}/> 
              <input type="submit" value="Add" name = "Add"/>
            </form>
            <Tasklist taskslist={list_tasks}/>
          </div>
        </div>
      </center> 
    </div>
  );
}

export default App;

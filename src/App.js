import React, { useState } from 'react';
import './App.css';
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App(){
    const [tasks,setTasks] = useState([]);
    const [filter,setFilter] = useState('all');

    function addTask(title, description)
    {
        const newTask={id:Date.now(),title,description,completed:false};
        setTasks([...tasks,newTask]);
    };
    function toggleComplete(id) 
    {
      const updatedTasks = tasks.find(task=>task.id===id);
      updatedTasks.completed=!updatedTasks.completed;
      setTasks([...tasks]);
    };
    function deleteTask(id)
    {
      setTasks(tasks.filter(task=> task.id!==id));
    };
    function filteredTasks()
    {
        switch (filter) {
            case 'completed':
                return tasks.filter(task=>task.completed);
            case 'incomplete':
                return tasks.filter(task=>!task.completed);
            default:
                return tasks;
        }
    };
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <div>
                <button onClick={() => setFilter('all')}>All Tasks</button>&nbsp;
                <button onClick={() => setFilter('completed')}>Completed Tasks</button>&nbsp;
                <button onClick={() => setFilter('incomplete')}>Incomplete Tasks</button>
            </div>
            <TaskList 
                tasks={filteredTasks()} 
                toggleComplete={toggleComplete} 
                deleteTask={deleteTask} 
            />
        </div>
    );
};
export default App;
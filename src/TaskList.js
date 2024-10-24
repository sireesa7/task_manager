import React from 'react';

function TaskList({ tasks,toggleComplete,deleteTask })
{
    return(
        <ul>
            {tasks.map((task)=>(
                <li key={task.id} style={{ textDecoration:task.completed ?'line-through':'none'}}>
                    <input type="checkbox" checked={task.completed} 
                        onChange={()=>toggleComplete(task.id)} 
                    /> 
                    {task.title} {task.description}
                    <button onClick={()=>deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
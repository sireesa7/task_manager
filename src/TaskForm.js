import React, { useState } from 'react';

function TaskForm({ addTask })
{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    function handleSubmit(e) 
    {
        e.preventDefault();
        if (title.trim() || description.trim()) 
            {
            addTask(title, description);
            setTitle(""); 
            setDescription(""); 
            }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(event)=>setTitle(event.target.value)} 
                placeholder="Enter Ttile here" 
            />&nbsp;
            <input 
                type="text" 
                value={description} 
                onChange={(event)=>setDescription(event.target.value)} 
                placeholder="Enter Description here" 
            />&nbsp;&nbsp;
            <button type="submit">Add</button>
        </form>
    );
};
export default TaskForm;
import React from 'react'

const Tasklist = ({taskslist}) => {
    return (
        <div>
            {taskslist.map((tasks,index) => 
            <div key={index}>
                <h5>{tasks} &nbsp; <button>DELETE</button></h5>
            </div>)}
        </div>
    )
}
export default Tasklist
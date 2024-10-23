import React from 'react'


function App()
{
  return(
    <div className = "TaskManger">
      <h1>Task Manger</h1>

      <div className = "Tasks-set">
        <div className = "Title-input"><input type = "text" placeholder="Enter your title here"/></div>
        <div className = "Description-input"><input type = "text" placeholder="Enter your description here"/></div>
        <div className = "Add button"><button type="button" className="primaryButton"> Add </button></div>
      </div>
      <div className = "Tasks filteration buttons">
        <button>Incomplete Tasks</button>
        <button>completed Tasks</button>
        <button>All Tasks </button>
      </div>
      <div className = "List of tasks">
           <div className = "tasksList"> 
                  <h3> Task1 </h3>
                  <p> Jesus will protect me</p>
            </div>
      </div>
    </div>
  )
}
export default App;
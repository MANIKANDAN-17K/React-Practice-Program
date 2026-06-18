import { useState } from "react";

function TodoList(){
    const [tasks,setTasks] = useState([
        "java",
        "python",
        "javascript",
        "c++",
        "typescript",
        "c#"
    ])
    const deleteT = (tsk) =>{
        const updatedTasks = tasks.filter(t => t !== tsk);
        setTasks(updatedTasks);
    }

    return(
        <div>
            <h1>To Do List</h1>
            {tasks.map((task,idx)=>(
                <div key = {idx}>{task}
                <button onClick = {()=>deleteT(task)}>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default TodoList;
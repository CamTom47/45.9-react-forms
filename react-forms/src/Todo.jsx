import React from "react";

const Todo = ({id, task, removeTodo}) => {
    return (
        <>
        <div>
            <li>
                {task}
            </li>
            <button onClick={() => removeTodo(id)}></button>
        </div>
            
        </>
    )

}

export default Todo
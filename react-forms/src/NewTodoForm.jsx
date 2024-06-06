import React, { useState } from "react";
import {v4 as uuid} from "uuid"



const NewTodoForm = ({createTodo}) => {

    const INITIAL_STATE = {
        task: ""
    };
    const [todoForm, setTodoForm] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {...todoForm, id: uuid()}
        console.log(newTodo)
        createTodo(newTodo);
        setTodoForm(INITIAL_STATE);

        
    }
    
    const handleChange = (e) => {
        const {name , value} = e.target;

        setTodoForm({
            [name]: value
        })
    }



    return (
        <>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <label className="TodoForm-label" htmlFor="task">To Do:</label>
                <input onChange={handleChange} className="TodoForm-input" name="task" placholder="To Do?" value={todoForm.task} type="text"></input>
                <button className="TodoForm-button">Add To Do</button>
            </form>
        </>
    )
}

export default NewTodoForm
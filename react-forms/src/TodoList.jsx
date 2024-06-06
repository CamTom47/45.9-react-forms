import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";


const TodoList = () => {

    const [todos, setTodos] = useState([])

    const createTodo = newTodo => {
        setTodos(todos => ([...todos, newTodo]))
    }
    
    const removeTodo = id => {
        setTodos( todos => todos.filter( todo => todo.id !== id))
    }

    const todoComponents = todos.map(todo => (
                    <Todo 
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        removeTodo={removeTodo}
                    />
                ));

    return (
        <>
            <NewTodoForm createTodo={createTodo} />
            <ul>
            {todoComponents}
            </ul>
        </>
    )

}

export default TodoList
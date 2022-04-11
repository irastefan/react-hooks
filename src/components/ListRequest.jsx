import React from "react";
import axios from "axios";
import useRequest from "../hooks/useRequest";

const ListRequest = () => {
    const [todos, loading, error] = useRequest(fetchTodos)

    function fetchTodos() {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
    }

    if (loading === true) return <h1>Loading...</h1>

    if (error) return <h1>Error!</h1>
    
    return (
        <div>
            {todos && todos.map( todo => 
                <div key={todo.id} style={{padding: 30, border: '1px solid #000'}}>{todo.id}. {todo.title}</div>
            )}
        </div>
    )
}

export default ListRequest
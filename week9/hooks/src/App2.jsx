import React from "react"
import { useState,useEffect } from "react"
import axios from "axios"

function useTodo(n){
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(0);
    useEffect(()=>{
        const inte = setInterval(()=>{
            async function fetchData() {
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
                res.data.reverse();
                setLoading(1);
                setTodos(res.data);
                console.log("refreshed");
            }
        fetchData();
        },n*1000)
        async function fetchData() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setLoading(1);
            setTodos(res.data);
        }
        fetchData();
        return ()=>{
            clearInterval(inte);
        }
    },[n])
    return {todos, loading};
}

function App2(){
    const {todos, loading} = useTodo(100000000000);
    if(!loading){
        return (
            <div className="flex items-center justify-center text-7xl font-bold w-full h-full">
                Loading...
            </div>
        )
    }
    return(
        <>{todos.map(todo=> <TodoCard key={todo.id} todo={todo}/>)}</>
    )
}

function TodoCard({todo}){
    return(
        <div className="bg-amber-200 m-5 flex flex-col">
            <h1 className="font-bold">TODO: {todo.title}</h1>
            <p className="font-extrabold">Status: {todo.completed?"Complete":"Not Complete"}</p>
        </div>
    )
}

export default App2;
import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [id,useId] = useState(1);
  return (
    <div>
      <button onClick={()=>{useId(1)}}>1</button>
      <button onClick={()=>{useId(2)}}>2</button>
      <button onClick={()=>{useId(3)}}>3</button>
      <button onClick={()=>{useId(4)}}>4</button>
      <Todo id={id}/>
    </div>
  )
}

function Todo({id}){

  const [todo,useTodo] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:3000/${id}`).then(function(response){
      useTodo(response.data.todo)
    })
  },[id])

  return (
    <div>

    <h1>Title: {todo.title}</h1>
    <p>Description: {todo.description}</p>
    </div>
  )
}

export default App

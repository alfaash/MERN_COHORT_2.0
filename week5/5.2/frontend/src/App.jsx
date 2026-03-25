import { useState, useEffect } from 'react'
import {CreateTodo} from '../src/components/CreateTodo';
import {Todos} from '../src/components/Todos';
import './App.css'

function App() {

  const [todo, setTodo] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/todo").then(async function(res){
      const json =await res.json();
      setTodo(json.data);
    })
},[]);


  async function changeState(idToChange){
    await fetch(`http://localhost:3000/completed/${idToChange}`,{
      method:'PUT'
    })
    fetch("http://localhost:3000/todo").then(async function(res){
      const json =await res.json();
      setTodo(json.data);
    })
  }

  async function addTodo(todoTitle, todoDesc){
    console.log(todoTitle,todoDesc);
    await fetch("http://localhost:3000/todo",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title:todoTitle,
        desc:todoDesc
      })
    });
    fetch("http://localhost:3000/todo").then(async function(res){
      const json =await res.json();
      setTodo(json.data);
    })

  }

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"

    }}>
      <h1 id="heading">TODO APP</h1>
      <CreateTodo addTodo={addTodo}></CreateTodo>
      <Todos todos={todo} changeState={changeState}></Todos>
    </div>
  )
}

export default App

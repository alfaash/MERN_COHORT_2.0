import './App.css'
// Hook
import {useState} from 'react'
// State and Component

function App() {
  const [todo, setTodo] = useState([{
    title:"Go to gym",
    desc:"From 9-10 pm",
    completed:false
  },{
    title:"Study DSA",
    desc:"From 12-1 pm",
    completed:false
  },{
    title:"Study DBMS",
    desc:"From 1-2 pm",
    completed:false
  }]);
  return (
    <div>
      {
        todo.map((todo)=>{
          return <CustomTodo title={todo.title} desc={todo.desc} comp={todo.completed}/>
        })
      }
      <DarkTodo todo={todo}></DarkTodo>
      <input id='todo' type='text' placeholder='Task'></input><br/><br/>
      <input id='todoDesc' type='text' placeholder='Description'></input><br/><br/>
      <button onClick={()=>{
        setTodo([...todo,{
            title:document.getElementById('todo').value,
            desc:document.getElementById("todoDesc").value,
            completed:false
          }]);
      }}>Add Todo</button>
    </div>
  )
}

function DarkTodo(props){
  return (
    <div>
      {
        props.todo.map((todo)=>{
          return <div style={{background:"black", color:"white"}}><CustomTodo title={todo.title} desc={todo.desc}></CustomTodo></div>
        })
      }
    </div>
  )  
}

function CustomTodo(todos){
  return (
    <div>
      <h1>Title: {todos.title}</h1>
      <p>Description: {todos.desc}</p>
    </div>
  );
}

export default App

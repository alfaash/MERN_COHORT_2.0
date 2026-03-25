import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'

let counter = 4;

function App() {
  const [todo, useTodo] = useState([{
    id:1,
    title:"Task1",
    description:"Desc1"
  },{
    id:2,
    title:"Task2",
    description:"Desc2"
  },{
    id:3,
    title:"Task3",
    description:"Desc3"
  }]);

  function addTodo(titl, desc){
    useTodo([...todo,{
      id:counter,
      title:titl,
      description:desc
    }]);
    counter++;
  }

  return (
    <div>
      <input id="tit" placeholder='Title'/><br/><br/>
      <input id="des" placeholder='Description'/><br/><br/>
      <button onClick={()=>{addTodo(`${document.getElementById('tit').value}`,`${document.getElementById('des').value}`)}}>Add Todo</button>
      {
        todo.map((i)=>{
          return <Header key={i.id} todo={i}/>
        })
      }
    </div>
  )
}

export default App

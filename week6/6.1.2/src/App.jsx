import { useEffect, useState } from 'react'

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    setInterval(()=>{
      fetch("http://localhost:3000").then(async (tod)=>{
        const json = await tod.json();
        setTodo(json.todos);
      })
    },5000)
  },[]);

  return (
    <div>
      {
        todo.map(t=>
          <CreateTodo key={t.id} title={t.title} description={t.description} />
        )
      }
    </div>
  )
}

function CreateTodo({title,description}){
  return (
    <div>
    <h1>Title: {title}</h1>
    <p>Description: {description}</p>
    </div>
  )
}

export default App

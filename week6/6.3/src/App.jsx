import { useEffect, useState } from 'react'
// import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [cnt, setCnt] = useState(0);
  useEffect(()=>{
    console.log("HARD TASK")
    setCount(count);
  },[count]);
  return (
    <>
      <button onClick={()=>setCount(count+1)}>Count: {count}</button>
      <button onClick={()=>setCnt(cnt+1)}>Counter: {cnt}</button>
    </>
  )
}

export default App

// Use memo 
import { useEffect, useState } from 'react'
import {useMemo} from 'react'

function App() {
    const [temp, setTemp] = useState(0);
    const [num,setNum] = useState(0);   
    let sum  = useMemo(()=>{
        console.log("Hel");
        return (num*(num+1))/2;
    },[num])
  return (
    <div>
        {/* <Input/>
        <Counter/> */}
        <input onChange={(e)=>{setNum(Number(e.target.value))}} placeholder='Enter a number' id='number'></input>
        <p>Sum is: {sum}</p>
        <br/>
        <button onClick={()=>setTemp(temp+1)}>Temp: {temp}</button>
    </div>
  )
}

function sum(a){
    console.log("hello");
    a = Number(a);
    return (a*(a+1))/2;
}

function Input(){
    const [num,setNum] = useState(0);
    return (
        <>
            <input onChange={(e)=>{setNum(sum(e.target.value))}} placeholder='Enter a number' id='number'></input>
            <p>Sum is: {num}</p>
        </>
    )
}

function Counter(){
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={()=>setCount(count+1)}>Counter ({count})</button>
        </>
    )
}

export default App

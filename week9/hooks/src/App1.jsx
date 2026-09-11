import React from "react"
import {useState, useEffect} from "react"

function App1(){
    const [render,setRender] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setRender(r => !r);
        },2000)
    },[])
    return(
        <>
        {render?<MyComp/>:<></>}
        </>
    )
}

function MyComp(){
    const [todo,setTodo] = useState(0);
    useEffect(()=>{
        // Runs when component mounts
        console.log("Mount");
        return ()=>{
            // Runs when component unmounts
            console.log("Unmount");
        }
    },[todo])
    // setTimeout(()=>{
    //     setTodo(5);
    // },5000)
    return (
        <>
        Hello {todo}
        </>
    )
}

export default App1;
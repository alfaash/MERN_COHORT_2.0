import { useState, useEffect } from "react";

function useTimer(fn, timeout){
    useEffect(()=>{
        const int = setInterval(()=>{
            fn()
        },timeout);
        return ()=>{
            clearInterval(int);
        }
    },[])
}

function App4(){
    const [time,setTime] = useState(0);
    useTimer(()=>{
        setTime(t=>t+1);
    },100000);
    return <div>
        Timer at : {time}
    </div>
}

export default App4;
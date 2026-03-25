// useCallback 
import React from 'react'
import { useEffect, useState, useMemo, useCallback } from 'react'


function App() {
    const [temp, setTemp] = useState(0);

    const handleClicks = useCallback(()=>{
        console.log("Clicked");
    },[]);

  return (
    <div>
        <button onClick={()=>setTemp(temp+1)}>Temp: {temp}</button><br/>
        <Child handleClicks={handleClicks}/>
    </div>
  )
}

const Child = React.memo(({handleClicks})=>{
    console.log("Child rerendered");
    return (
        <button onClick={handleClicks}>Clicks</button>
    )
});


export default App

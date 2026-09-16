import {React, useState, useEffect} from "react"

function useIsOnline(){
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
    useEffect(()=>{
        window.addEventListener("online",()=>setIsOnline(true));
        window.addEventListener("offline",()=>setIsOnline(false));
        return ()=>{
            window.removeEventListener('online', ()=>setIsOnline(true));
            window.removeEventListener('offline', ()=>setIsOnline(false));
        }
    },[isOnline])
    return isOnline;
}

function App3(){
    const status = useIsOnline();
    return (
        <div className="text-7xl font-bold"> 
            {status==true?"Online":"Offline"}
        </div>
    )
}

export default App3;
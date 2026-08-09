import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SendMoney from "../components/SendMoney";
function Send(){
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(()=>{
    const ID = searchParams.get("id");
    const name = searchParams.get("name");
    setName(name);
    setId(ID);
    
  },[])
  return(
    <div className="font-[-apple-system,BlinkMacSystemFont,sans-serif] flex items-center justify-center w-screen h-screen bg-gray-100">
      <SendMoney name={name}/>
    </div>
  )
}

export default Send;
import { useEffect, useState } from "react";
import axios from "axios";
const balance = ()=>{
    const [amt, setAmt] = useState(0);
    const token = localStorage.getItem("token");
    useEffect(()=>{
        const fetch = async ()=>{
            const res = await axios.get("http://localhost:3000/api/v1/account/balance",{
                headers: {
                'Authorization': `Bearer ${token}`
                }
            });
            setAmt(res.data.balance);
        }
        fetch();
    },[])

    return(
        <div className="flex">
            <div className="flex items-center justify-start pe-2 font-semibold">
                Your Balance:
            </div>
            <div className="flex items-center justify-start px-2 font-medium">
                Rs {amt}
            </div>
        </div>
    )
}

export default balance;
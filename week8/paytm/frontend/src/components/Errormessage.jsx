import { useNavigate } from "react-router-dom";

function Errormessage({text,link,to}){
    const navigate = useNavigate();
    return(
        <div className="p-3">
            <span>{text}</span>
            <a className="underline cursor-pointer" onClick={()=>navigate(to)}>{link}</a>
        </div>
    )

}

export default Errormessage;
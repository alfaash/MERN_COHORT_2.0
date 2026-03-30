import {useNavigate} from 'react-router-dom'

export default function About(){
    const navigate = useNavigate();
    function handleClick(path){
        navigate(path);
    }
    return (
        <div>
            <h1>Welcome to the about page</h1>
            <p>This is a simple about page, this is the information about the page itself. Thank you! Visit again</p>
            <button onClick={()=>handleClick('/')}>Home</button>
        </div>
    )
}
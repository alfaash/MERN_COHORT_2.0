import {useNavigate} from 'react-router-dom'
export default function Landing(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/dashboard");
    }
    return (
        <div>
            <h1>Landing Page</h1>
            <button onClick={handleClick}>Go to Dashboard</button>
        </div>
    )
}
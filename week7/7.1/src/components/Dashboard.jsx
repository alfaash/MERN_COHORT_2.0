import {useNavigate} from 'react-router-dom';
export default function Dashboard(){
    const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }
    return (
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={handleClick}>Go to Landing page</button>
        </div>
    )
}
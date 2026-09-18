import {useState, useEffect} from "react"

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

function App5(){
    const [value, setValue] = useState("");

    const debouncedValue = useDebounce(value,200);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-amber-300">
            <input className="bg-amber-100 rounded-md ps-2" type="text" placeholder="Search..." onChange = {(e)=>setValue(e.target.value)}></input>
            <div>{debouncedValue}</div>
        </div>
    )
}

function TodoCard({todo}){
    return(
        <div className="bg-amber-200 m-5 flex flex-col">
            <h1 className="font-bold">TODO: {todo.title}</h1>
            <p className="font-extrabold">Status: {todo.completed?"Complete":"Not Complete"}</p>
        </div>
    )
}

export default App5;
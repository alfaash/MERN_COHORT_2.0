export function Header({todo}){
    return (
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
        </div>
    )
}
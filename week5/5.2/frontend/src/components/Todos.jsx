export function Todos({todos, changeState}){
    return (
        <div>
            {
                todos.map((todo)=>{
                    return (
                        <div key={todo._id} style={{margin:"10px"}}>
                            <div style={{
                                backgroundColor: todo.completed?'rgba(14, 226, 21, 0.3)':'rgba(180, 25, 25, 0.3)',
                                borderRadius:"0.5rem",
                                display:"inline-flex",
                                flexDirection:"column",
                                alignItems:"center",
                                justifyContent:"center",
                                padding: '0.75rem 1rem'
                            }}>
                                <h3>Task: {todo.title}</h3>
                                <p>Description: {todo.description}</p>
                                <button onClick={()=>changeState(todo._id)}>{(todo.completed)?"Mark as undone":"Mark as done"}</button>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}
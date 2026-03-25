export function CreateTodo({addTodo}){
    return (
        <div>
            <input id="todoTitle" type="text" placeholder="title"></input><br/><br/>
            <input id="todoDesc" type="text" placeholder="description"></input><br/><br/>
            <button onClick={()=>addTodo(`${document.getElementById('todoTitle').value}`,`${document.getElementById('todoDesc').value}`)}>Add a todo</button><br/><br/>
        </div>
    )
}


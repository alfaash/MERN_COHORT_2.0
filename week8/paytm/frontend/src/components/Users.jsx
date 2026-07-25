const Users = ({name})=>{
    const initial = name[0];
    return(
        <div className="flex my-5">
            <div className="flex w-full">
                <div className="flex items-center justify-center rounded-full bg-slate-300 h-10 w-10 mx-1 text-lg">
                    {initial}
                </div>
                <div className="flex items-center justify-center px-1">
                    {name}
                </div>
            </div>
            <button className="flex w-30 bg-zinc-950 text-white justify-center items-center text-sm rounded-lg px-2 py-1 hover:scale-105 transition duration-150">Send Money</button>
        </div>
    )
}

export default Users;
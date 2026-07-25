const UsersHeader = ()=>{
    return(
        <div className="flex flex-col my-4">
            <div className="flex items-center justify-start font-bold my-2">
                Users
            </div>
            <input type="text" placeholder="Search Users..." className="w-full border border-zinc-400 p-1 ps-2 rounded-md text-sm" />
        </div>
    )
}

export default UsersHeader;
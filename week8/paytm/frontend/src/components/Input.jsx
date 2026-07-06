function Input({title,placeholder}){

    return(
        <div className="flex flex-col items-start">
            <h1 className="text-md font-medium my-1">{title}</h1>
            <input placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>
    )

}

export default Input;
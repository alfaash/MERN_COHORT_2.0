function Input({title,placeholder,onChange}){

    return(
        <div className="flex flex-col items-start my-2">
            <h1 className="text-sm font-bold my-1">{title}</h1>
            <input placeholder={placeholder} onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>
    )

}

export default Input;
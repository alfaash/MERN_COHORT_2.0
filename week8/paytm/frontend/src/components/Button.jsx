function Button({text,onclick}){
    return(
        <button className="btn text-gray-50 bg-zinc-900 w-full py-1 my-1 rounded-sm hover:bg-zinc-800" onClick={onclick}>
            {text}
        </button>
    )
}

export default Button;
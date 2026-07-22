function Button({text,onclick}){
    return(
        <button className="btn text-gray-50 bg-zinc-900 w-full py-2 my-2 rounded-lg hover:bg-zinc-800" onClick={onclick}>
            <p className="font-medium">{text}</p>
        </button>
    )
}

export default Button;
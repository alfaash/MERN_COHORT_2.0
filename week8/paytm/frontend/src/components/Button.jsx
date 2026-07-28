function Button({ text, onclick, color }) {
    return(
        <button className={`btn text-gray-50 ${color ? color : "bg-zinc-900"} w-full py-2 my-2 rounded-lg`} onClick={onclick}>
            <p className="font-medium">{text}</p>
        </button>
    )
}

export default Button;
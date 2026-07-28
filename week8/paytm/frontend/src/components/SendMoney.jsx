import Button from "../components/Button"
const SendMoney = ({name})=>{
    return (
        <div className="flex items-start justify-center shadow bg-white text-center">
            <div className="p-5">
                <h1 className="text-3xl font-bold p-5 pb-20">Send Money</h1>

                <div className="flex items-center justify-start">
                    <div className="flex items-center justify-center bg-green-600 text-white font-xl h-11 w-11 rounded-full">{name[0]}</div>
                    <div className="text-2xl font-bold ps-3">{name}</div>
                </div>
                <div className="text-sm py-2 font-medium text-start">Amount (in Rs)</div>
                <input type="number" placeholder="Enter amount" className="border-2 border-zinc-400 px-4 py-1 rounded-lg w-full"/>
                <Button text={"Initiate transfer"} onclick={()=>{}} color={"bg-green-600"}/>
            </div>
        </div>
    )
}

export default SendMoney;
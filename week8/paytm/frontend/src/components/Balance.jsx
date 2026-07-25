const balance = ({amt})=>{
    return(
        <div className="flex">
            <div className="flex items-center justify-start pe-2 font-semibold">
                Your Balance: 
            </div>
            <div className="flex items-center justify-start px-2 font-medium">
                Rs {amt}
            </div>
        </div>
    )
}

export default balance;
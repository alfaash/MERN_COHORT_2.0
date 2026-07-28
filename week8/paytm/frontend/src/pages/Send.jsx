import SendMoney from "../components/SendMoney";
function Send(){
  return(
    <div className="font-[-apple-system,BlinkMacSystemFont,sans-serif] flex items-center justify-center w-screen h-screen bg-gray-100">
      <SendMoney name={"Friend's Name"}/>
    </div>
  )
}

export default Send;
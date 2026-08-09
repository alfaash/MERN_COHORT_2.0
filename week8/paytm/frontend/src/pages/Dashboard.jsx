import Topbar from "../components/Topbar"
import Balance from "../components/Balance"
import Users from "../components/Users"
function Dashboard(){
  return(
    <div className="font-[-apple-system,BlinkMacSystemFont,sans-serif]">
      <Topbar/>
      <div className="mx-7">
        <Balance amt={"10,000"}/>
        <Users/>
      </div>
    </div>
  )
}

export default Dashboard
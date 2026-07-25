import Topbar from "../components/Topbar"
import Balance from "../components/Balance"
import UsersHeader from "../components/UsersHeader"
import Users from "../components/Users"
function Dashboard(){
  return(
    <div className="font-[-apple-system,BlinkMacSystemFont,sans-serif]">
      <Topbar/>
      <div className="mx-7">
        <Balance amt={"10,000"}/>
        <UsersHeader/>
        <Users name={"Ashutosh Tiwari"}/>
      </div>
    </div>
  )
}

export default Dashboard
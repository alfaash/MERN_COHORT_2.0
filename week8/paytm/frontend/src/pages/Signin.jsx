import Heading from "../components/Heading"
import Subtext from "../components/Subtext"
import Input from "../components/Input"
function Signin(){
  return(
    <div className="font-[-apple-system,BlinkMacSystemFont,sans-serif] bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading title={"Sign in"}/>
          <Subtext text={"Enter your credentials to access your account"}/>
          <Input title={"Email"} placeholder={"ashutosh@gmail.com"}/>
        </div>
      </div>
    </div>
  )
}

export default Signin;
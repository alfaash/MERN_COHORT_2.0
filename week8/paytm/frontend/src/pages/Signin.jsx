import axios from "axios"
import {useState} from "react"
import Heading from "../components/Heading"
import Subtext from "../components/Subtext"
import Input from "../components/Input"
import Button from "../components/Button"
import Errormessage from "../components/Errormessage"
function Signin(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return(
    <div className="font-[-apple-system,BlinkMacSystemFont,sans-serif] bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading title={"Sign in"}/>
          <Subtext text={"Enter your credentials to access your account"}/>
          <Input title={"Email"} placeholder={"ashutosh@gmail.com"} onChange={(e)=> setEmail(e.target.value)}/>
          <Input title={"Password"} placeholder={"123456"} onChange={(e)=> setPassword(e.target.value)}/>
          <Button text={"Sign in"} onclick={()=>{signin(email,password)}}/>
          <Errormessage text={"Don't have an account?"} link={"Sign up"} to={"/signup"}/>
        </div>
      </div>
    </div>
  )
} 

async function signin(email, password) {
  try {
    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
      username: email,
      password: password
    });
    localStorage.setItem("token", response.data.token);
    console.log(response.data.jwt);
  } catch (error) {
    console.log(error);
    alert("Could not sign in! Try again later");
  }
}

export default Signin;
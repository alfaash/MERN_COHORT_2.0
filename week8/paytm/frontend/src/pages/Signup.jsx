import axios from "axios"
import {useState} from "react"
import Heading from "../components/Heading"
import Subtext from "../components/Subtext"
import Input from "../components/Input"
import Button from "../components/Button"
import Errormessage from "../components/Errormessage"
import { useNavigate } from "react-router-dom"
function Signup(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName,setFName] = useState("");
  const [lName,setLName] = useState("");
  const navigate = useNavigate();
  return(
    <div className="font-[-apple-system,BlinkMacSystemFont,sans-serif] bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading title={"Sign up"}/>
          <Subtext text={"Enter your information to create an account"}/>
          <Input title={"First Name"} placeholder={"John"} onChange={(e)=> setFName(e.target.value)}/>
          <Input title={"Last Name"} placeholder={"Doe"} onChange={(e)=> setLName(e.target.value)}/>
          <Input title={"Email"} placeholder={"ashutosh@gmail.com"} onChange={(e)=> setEmail(e.target.value)}/>
          <Input title={"Password"} placeholder={"12345678"} onChange={(e)=> setPassword(e.target.value)}/>
          <Button text={"Sign up"} onclick={()=>{signup(fName,lName,email,password,navigate)}}/>
          <Errormessage text={"Already have an account?"} link={"Sign in"} to={"/signin"}/>
        </div>
      </div>
    </div>
  )
}

async function signup(fName,lName,email,password,navigate){
  try {
    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
      username: email,
      firstName:fName,
      lastName:lName,
      password:password
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    alert("Could not sign in! Try again later");
  }
}

export default Signup;
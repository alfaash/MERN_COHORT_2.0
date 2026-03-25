const express = require("express");
const mongoose = require("mongoose")
const app = express();

// Middleware
app.use(express.json());

mongoose.connect("mongodb+srv://ashu:Sm5kDdFBp3L@taskmanagerproject.xpvj2ki.mongodb.net/COHORT?retryWrites=true&w=majority&appName=TaskManagerProject");
const User = mongoose.model('Users', {name:String, email:String, password:String});

app.post("/signup",async (req,res)=>{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  try {
    const existingUser = await User.findOne({email:email});
    if(existingUser){
      return  res.status(400).send("User already exists");
    }
    const user1 = new User({name:name, email:email, password:password});
    user1.save();
    console.log("User data saved");
    res.status(200).send("User data saved");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
  
})


app.listen(3000,()=>{
  console.log("Listenting to port 3000");
})
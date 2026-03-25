const express = require("express");
const app = express();

let person =[{
    name:"Ashu",
    kidneys:[{healthy:false}]
}];

// Middleware
app.use(express.json());

app.get("/",(req,res)=>{
    res.send(`<h1>Welcome to the doctor's clinic ${person[0].name}</h1>`);
})

app.post("/",(req,res)=>{
    res.send(`h1>You will get a new kidney inserted now, Your age is ${req.body.name}</h1>`);
})

app.put("/",(req,res)=>{
    res.send("<h1>You are going to get your kidney replace</h1>");
})

app.delete("/",(req,res)=>{
    res.send("<h1>You are going to get your kidney Deleted</h1>");
})

app.listen(3000,()=>{
    console.log("Server is listening to port 3000");
})
const express = require("express");
const app = express();

const check = (req,res,next)=>{
    const ticket = req.query.ticket;
    if(ticket=="free"){
        next();
    }
    else{
        res.status(403).json({message:"Access Denied"});
    }
}

const ageCheck = (req,res,next)=>{
    const age = req.query.age;
    if(!age) res.status(400).json({message:"Age not provided"});
    if(age>=14) next();
    else res.status(403).json({message:"Age limit not met"})
}

app.use(check, ageCheck);

app.get("/ride1",(req,res)=>{
    res.status(200).send("You got in the first ride");
})

app.get("/ride2",(req,res)=>{
    res.status(200).send("You got in the first ride");
})

app.get("/ride3",(req,res)=>{
    res.status(200).send("You got in the first ride");
})

app.listen(3000,()=>{
    console.log("Listening to port 3000");
})
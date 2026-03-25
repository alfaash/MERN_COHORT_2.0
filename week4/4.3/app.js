const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const path = require('path');
const mongoose = require("mongoose");
const User = require('./Model/schema');
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Connecting MongoDB
const connectDB = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected!");
    } catch (error) {
        console.log("DB NOT CONNECTED!", error);
    }
}
connectDB();

// ---------------------------------------------------Create---------------------------------------------------
const createUser = ()=>{
    User.create({
        username:"alfa",
        password:"Ashu"
    });
}
//createUser();

// ---------------------------------------------------Read---------------------------------------------------
const readUser = async()=>{
    const req1 = await User.findById("6978d5fc6c4d235b2c1d102d");
    const req2 = await User.findOne({
        username:"alfaash"
    });
    const req3 = await User.find({
        username:"alfa"
    })
    console.log("FindByID:",req1,"FindOne", req2,"Find", req3);
}
// readUser();



// Starting Server
app.listen(5000,()=>{
    console.log("Server on port 5000");
})
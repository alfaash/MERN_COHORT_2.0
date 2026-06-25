const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const db = (url)=>{
    return mongoose.connect(url);
}

const userSchema = new mongoose.Schema({
    name: {
        firstName:{
            type: String,
            required: [true, "First Name is required"],
            trim:true
        },
        lastName:{
            type: String,
            required: [true, "Last Name is required"],
            trim:true
        }
    },
    username : {
        type: String,
        unique: true,
        required : [true, "Username is required"],
        trim : true
    },
    password : {
        type: String,
        trim: true,
        required: [true, "Password is required"],
        minlength: [8, "Password must be atleast 8 characters"],
        select: false
    }
});



const User = mongoose.model('User',userSchema);
module.exports = {db, User};
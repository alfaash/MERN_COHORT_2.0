const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
})

// hash passowrd
userSchema.pre("save", async function(enteredPass){
    if(!this.isModified("password")) return;
    this.password = bcrypt.hash(this.password,14);
})
// Compare passowrd
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

const User = mongoose.model('User',userSchema);
module.exports = {db, User};
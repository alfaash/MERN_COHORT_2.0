// 1:11:58
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

const accounts = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'User',
        required: true
    },
    balance:{
        type: Number,
        min: 0,
        required: true
    }
})



const User = mongoose.model('User',userSchema);
const Accounts = mongoose.model('Accounts',accounts);
module.exports = {db, User, Accounts};
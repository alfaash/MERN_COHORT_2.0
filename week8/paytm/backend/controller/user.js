const zod = require("zod");
const {User} = require("../db/connectDB");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config");



// Zod user validation schema
const userSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(8,{
        message:"password must be atleast 8 character long"
    })
});

const userLoginSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8,{
        message: "password must be atleast 8 character long"
    })
})

// Signup controller
const signup = async (req,res)=>{
    const body = req.body;
    // Input validation
    const inputValidation = userSchema.safeParse(body);
    if(!inputValidation.success){
        return res.status(411).json({
            message: "Email already taken / Incorrect Inputs"
        });
        
    }
    // Checking if user already exists
    const result = await User.findOne({username: body.username});
    if(result){
        return res.status(411).json({
            message: "Email already taken / Incorrect Inputs"
        });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(body.password,salt);

    // Creating user data
    const data = {
        name:{
            firstName:body.firstName,
            lastName:body.lastName
        },
        username:body.username,
        password: hashPassword
    }
    let userDB;
    try {
        userDB = await User.create(data);
    } catch (error) {
        return res.status(500).json({message:"Could not create account, try again!"})
    }

    // Generating JWT token
    const token = jwt.sign({userId: userDB._id},JWT_SECRET,{
        expiresIn: '30d'
    });

    // Sending back response
    res.status(200).json({message:"User created successfully", token:token});
}

const signin = async (req,res)=>{
    const body = req.body;
    const loginValidation = userLoginSchema.safeParse(req.body);
    // Input validation
    if(!loginValidation.success){
        return res.status(411).json({
            message:"Error while logging in"
        });
    }
    const userData = await User.findOne({username: body.username}).select("+password");
    if(!userData){
        return res.status(411).json({
            message:"Error while logging in"
        });        
    }
    // Comparing passwords
    bcrypt.compare(req.body.password, userData.password, (err)=>{
        if(err){
            return res.status(411).json({
                message:"Error while logging in"
            });    
        }
        else{
            const token = jwt.sign({userId:userData._id},JWT_SECRET,{
                expiresIn: '30d'
            });
            return res.status(200).json({
                jwt:token
            }); 
        }
    });
}

const userData = async (req,res)=>{
    const data = await User.find();
    res.status(200).json(data);
}

module.exports = {signup, signin, userData};
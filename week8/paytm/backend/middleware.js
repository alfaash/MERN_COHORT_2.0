const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

const authMiddleware = (req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(403).json({message:"Unauthorized Access."});
    }
    jwt.verify(token,JWT_SECRET,(err,decoded)=>{
        if(err){
            console.log(err);
            res.status(403).json({message:"Unauthorized Access."});
        }
        else{
            req.userId = decoded.userId;
            next();
        }
    })
}

module.exports = {authMiddleware};
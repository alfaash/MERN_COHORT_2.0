const jwt = require("jsonwebtoken");
// JWT secret
const JWT_SECRET = "!ijnUi2h9*Y4823h";
const auth = (req,res,next)=>{
    const token = req.headers.authorization.split("Bearer ").pop();
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data; 
        next();
    } catch (error) {
        console.log(error);
        res.status(403).send("Not verified");
    }
}

module.exports = auth;
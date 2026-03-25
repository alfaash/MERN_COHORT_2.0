import express from 'express'
import cors from 'cors'
const app = express();

app.use(cors());

app.get("/",(req,res)=>{
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;
    const c = Math.floor(Math.random() * 100) + 1;
    const d = Math.floor(Math.random() * 100) + 1;
    res.send({
        network: a, 
        jobs: b, 
        messaging: c, 
        notifications: d
    })
})

app.listen(3000,()=>{
    console.log("Server listening to port 3000")
})
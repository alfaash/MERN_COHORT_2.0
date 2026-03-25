const express = require("express");
const mongoose = require("mongoose");
const zod = require("zod");
const dotenv = require("dotenv");
const TODO = require("./schema");
const cors = require("cors");
dotenv.config();
const app = express();



// Middlware
app.use(express.json());
app.use(cors());

// Connecting to
try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
} catch (error) {
    console.log(`Could not connect to DB: ${error}`)
}

const todoSchema = zod.object({
    title: zod.string(),
    description: zod.string()
});

app.post("/todo",(req,res)=>{
    console.log(req.body);
    const {title, desc} = req.body;
    const todo = todoSchema.safeParse({
        title:title,
        description:desc
    });
    if(!todo.success){
        return res.status(500).json({message: todo.error});
    }
    try {
        TODO.create({
            title:todo.data.title,
            description:todo.data.description,
            completed:false
        });
        res.status(200).json({message:"Todo added into DB"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Could not add todo to DB", error:error});
    }
});

app.get("/todo",async (req,res)=>{
    try {
        const response = await TODO.find({});
        if(!response){
            return res.status(404).json({message:"No todos present"});
        }
        res.status(200).json({message:"Todos found", data:response});
    } catch (error) {
        res.status(500).json({message:"Could not fetch todos", error:error});
    }
});

app.put("/completed/:taskId",async (req,res)=>{
    const id = req.params.taskId;
    try {
        const doc = await TODO.findOne({_id:id});
        doc.completed = !doc.completed;
        doc.save();
        res.status(201).json({message:"Todo updated"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Could not mark task complete", error:error});
    }
})

app.get("/",(req,res)=>{
    res.send("<h1 style='text-align:center'>You should not be here</h1>");
});

app.listen(3000,()=>{
    console.log("Listening to port 3000");
})
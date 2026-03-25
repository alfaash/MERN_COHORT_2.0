const express = require("express");
const fs= require("fs");

const app = express();

app.get("/files",(req,res)=>{
    let filenames=fs.readdirSync("files");
    res.json({filenames});
})

app.get("/files/:filename",(req,res)=>{
    const file = req.params.filename;
    fs.readFile(`files/${file}`,'utf8',(err,data)=>{
        if(err){
            res.status(500).json({error:err});
        }
        else{
            if(data.trim().length==0) res.status(404).send("Data not found");
            res.status(200).json({content:data});
        }
    })
})

app.get("/",(req,res)=>{
    res.status(404).send("File not found");
})

app.listen(3000,()=>{
    console.log("Listening on 3000");
})
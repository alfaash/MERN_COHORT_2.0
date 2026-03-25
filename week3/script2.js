const express = require("express");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.static("./public"));

// ROUTES


// SERVER
app.listen(3000,()=>{
    console.log("Listening to port 3000");
})
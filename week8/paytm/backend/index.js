const express = require("express");
const app = express();
const {db, User} = require("./db/connectDB");

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const startServer = async ()=>{
    await db(process.env.MONGO_URI);
    console.log("Database Connected Successfully! ✅");
    app.listen(PORT, async ()=>{
        console.log(`Server Listening to PORT ${PORT}`)
    })
}
startServer();

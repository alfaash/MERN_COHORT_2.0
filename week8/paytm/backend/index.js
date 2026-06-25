// Video delay 20.6 seconds
const express = require("express");
const app = express();
const cors = require("cors");
const {db, User} = require("./db/connectDB");
const apiRouter = require("../backend/routes/index")

require('dotenv').config();
app.use(cors({
    origin:"http://localhost:5173/"
}));
app.use(express.json());

// Routes
app.use("/api/v1",apiRouter);

const PORT = process.env.PORT || 3000;

const startServer = async ()=>{
    await db(process.env.MONGO_URI);
    console.log("Database Connected Successfully! ✅");
    app.listen(PORT, async ()=>{
        console.log(`Server Listening to PORT ${PORT}`)
    })
}
startServer();

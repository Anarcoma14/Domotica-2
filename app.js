const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./DB/connect");
const router= require("./Routes/routes");

app.use(express.static("./Public"))
app.use(express.json())
app.use("/api/v1/rooms", router)


const port = process.env.port || 3000;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Server listening on port ${port}...`);
        })
    } catch (error) {
        console.log();
    }
}

start();
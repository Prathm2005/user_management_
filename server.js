const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db.js")

dotenv.config();
connectDB();
const app=express();
app.use(express.json());
app.use("/api/users",require("./routes/userroutes.js"));


const PORT=process.env.PORT||5000;

app.listen(PORT,()=>
    console.log("Server running on 5000"),
    
);
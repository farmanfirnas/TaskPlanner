const express=require("express");
const cors=require("cors");
const {connectDatabase} = require("./config/db");
const { userRoute } = require("./routes/user.route");
const { sprintRoute } = require("./routes/sprint.route");
const { taskRoute } = require("./routes/task.route");
const app=express()
require("dotenv").config()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send({msg:"server working absolutely fine"})
})
app.use("/sprint",sprintRoute)  // route
app.use("/user",userRoute)      //user route
app.use("/task",taskRoute)      //task route
const PORT=process.env.PORT||8081
app.listen(PORT,()=>{
    console.log("Server started")
    try{
        connectDatabase()
        console.log("Db Connected")

    }catch(err){
        console.log("err",err)
    }
   
})
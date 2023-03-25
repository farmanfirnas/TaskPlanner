const express=require("express");
const SprintModel = require("../model/SprintModel");

const sprintRoute=express.Router()  


// Creating new sprint

sprintRoute.post("/create",async(req,res)=>{
    try{
        const getAll=await SprintModel.find()
        let sprintNum=getAll.length?getAll.length+1:1
       await  SprintModel({sprint:sprintNum})
       res.status(200).send({msg:"Sprint Created Successfully"})

    }catch(err){
        res.status(501).send({msg:err.message})
    }
})

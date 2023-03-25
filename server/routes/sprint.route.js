const express=require("express");
const SprintModel = require("../model/SprintModel");

const sprintRoute=express.Router()  


// Creating new sprint

sprintRoute.post("/create",async(req,res)=>{
    try{
        const getAll=await SprintModel.find()
        let sprintNum=getAll.length?getAll.length+1:1
      const newSprint= await  SprintModel.create({sprint:sprintNum})
      await newSprint.save()
       res.status(200).send({msg:newSprint})

    }catch(err){
        res.status(501).send({msg:err.message})
    }
})

//get All sprint

sprintRoute.get("/all",async(req,res)=>{
    try{
        const allSprint=await SprintModel.find()
        res.status(200).send(allSprint)
    }catch(err){
        res.status(501).send({msg:err.message})
    }
})

module.exports={sprintRoute}
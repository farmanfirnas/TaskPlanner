const express=require("express");
const { Authentication } = require("../middlewares/Authentication");
const TaskModel = require("../model/TaskModel");

const taskRoute=express.Router()  


// Creating new task

taskRoute.post("/create",async(req,res)=>{
    try{
        const tags=req.body.tags.split(",")||[]
      const newTask= await  TaskModel.create({...req.body,tags})
      await newTask.save()
       res.status(200).send({msg:"Task Added Successfully"})

    }catch(err){
        res.status(501).send({msg:err.message})
    }
})

//get all task
taskRoute.get("/",async(req,res)=>{
    try{
        
        const allTask= await  TaskModel.find().populate("sprint").populate("assign")
    
         res.status(200).send(allTask)
  
      }catch(err){
          res.status(501).send({msg:err.message})
      }
})

//get task based on sprint
taskRoute.get("/sprint/:sprint",async(req,res)=>{
    const sprint=req.params.sprint
    try{
        
        const allTask= await  TaskModel.find({sprint}).populate("sprint").populate("assign")
    
         res.status(200).send(allTask)
  
      }catch(err){
          res.status(501).send({msg:err.message})
      }
})

//get task based on user
taskRoute.get("/user/:user",async(req,res)=>{
    const user=req.params.user
    try{
        
        const allTask= await  TaskModel.find({user}).populate("sprint").populate("assign")
    
         res.status(200).send(allTask)
  
      }catch(err){
          res.status(501).send({msg:err.message})
      }
})

//update task 
taskRoute.patch("/:task",async(req,res)=>{
    const task=req.params.task
    try{
        
        const allTask= await  TaskModel.findOneAndUpdate({_id:task},{...req.body})
    
         res.status(200).send({msg:"task update successfully"})
  
      }catch(err){
          res.status(501).send({msg:err.message})
      }
})

//update task 
taskRoute.delete("/:task",async(req,res)=>{
    const task=req.params.task
    try{
        
        const allTask= await  TaskModel.findByIdAndDelete({_id:task})
    
         res.status(200).send({msg:"task deleted successfully"})
  
      }catch(err){
          res.status(501).send({msg:err.message})
      }
})


module.exports={taskRoute}
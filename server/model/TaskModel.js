const mongoose=require("mongoose");

const TaskSchema=mongoose.Schema({
        task:{type:String,required:true},
        status:{type:String,default:"pending"},
        assign:[
            {type:mongoose.Types.ObjectId,ref:"user",required:true}
        ],
        sprint: {type:mongoose.Types.ObjectId,ref:"sprint",required:true}
})

const TaskModel=mongoose.model("task",TaskSchema);

module.exports=TaskModel
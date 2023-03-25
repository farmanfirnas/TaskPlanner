const mongoose=require("mongoose");

const SprintSchema=mongoose.Schema({
        sprint:{type:Number,required:true},
    
})

const SprintModel=mongoose.model("sprint",SprintSchema);

module.exports=SprintModel
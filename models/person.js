const mongoose =require("mongoose")

const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    work:{
        type:String,
        enum : ["chef","waiter" , "manager"],
        required:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
    
})

const Person  = mongoose.model("person",PersonSchema)

module.exports= Person
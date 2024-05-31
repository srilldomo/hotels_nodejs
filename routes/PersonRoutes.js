const express = require("express")
const router  = express.Router()
const Person = require("../models/person")

router.post("/",async(req,res)=>{
    try {
      const data = req.body 
      const newPerson = new Person(data)
      const response = await newPerson.save()
      console.log("Data saved", response)
      res.render("person",{data:response})
      // res.status(200).json(response)
    } catch (error) { 
      console.log(error)
      res.status(500).json({error:"internal server error"})
    }
  
  })

  router.get("/data",async(req,res)=>{
    try { 
   const data = await Person.find({})
   console.log("data saved",data)
res.status(200).json(data)
    } catch (error) {
       console.log(error)
   res.status(500).json({error:"internal server error"})
    }
})

router.get("/:worktype",async(req,res)=>{
    try {
       const worktypes = req.params.work
   if(worktypes==="manager" || worktypes==="chef" || worktypes==="waiter"){
       const response  = await Person.find({work:worktypes})
       console.log("Data fetched" , response)
       res.status(200).json(response)
   }else{
       res.status(404).json({error:"Data not find"})
   }
       
    } catch (error) {
       console.log(error)
           res.status(500).json({error:"internal server error"})
    }
   })

   router.put("/:id",async(req,res)=>{
    try {
      const personId = req.params.id
      const updatePerson =  req.body
      const response = await Person.findByIdAndUpdate(personId,updatePerson,{
        new:true,
        runValidators:true
      })
      console.log("Data fetched")
      res.status(200).json(response)
    } catch (error) {
      console.log(error)
           res.status(500).json({error:"internal server error"})
    }
   })

   router.delete("/:id",async (req,res)=>{
    try {
      const personId = req.params.id
      const response = await Person.findByIdAndDelete(personId)
      if(!response){
        return res.status(404).json({error:"Id not found"})
      }
      console.log("Id Deleted Successfully")
      res.status(200).json({message:"Deleted Successfully"})
    } catch (error) {
      console.log(error)
           res.status(500).json({error:"internal server error"})
    }
   })

   router.post("/",(req,res)=>{
    console.log("Hello world this is calling a / and i will counting a number from the server ")
   })
   module.exports = router
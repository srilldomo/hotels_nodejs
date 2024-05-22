const express = require ("express")
const router = express.Router()
const Menu = require("../models/menu")


router.post("/", async(req,res)=>{
    try {
        const data = req.body
        const  menu = new Menu(data)
        const response = await menu.save()
        console.log("Menu saved",response)
        res.status(200).json(response)
        
    } catch (error) {
        console.log(error)
    res.status(500).json({error:"internal server error"})
        
    }
})


router.get("/data",async(req,res)=>{
    try {
        const data = await Menu.find({})
            console.log("data saved",data)
            res.status(200).json(data)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internal server error"})
    }
})  

router.put("/:id",async(req,res)=>{
    try {
        const menuid = req.params.id
        const updateMenu = req.body
        const response = await Menu.findByIdAndUpdate(menuid,updateMenu,{
            new:true,
            runValidators:true
        })
        console.log("data fetched")
        res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internal server error"})
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const menuid = req.params.id
        const response = await Menu.findByIdAndDelete(menuid)
        console.log("Deleted Successfully" , "Id is:", menuid)
        res.status(200).json({meassage:"Deleted Successfully"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internal server error"})
    }
})

module.exports = router
const express = require("express")
const Menu = require("../models/menu")
const Person = require("../models/person")
const router = express.Router()


router.get("/",async (req,res)=>{
    const allMenu = await  Menu.find({}) 
return res.render ("index",{menus:allMenu})
})

router.get("/person", async(req,res)=>{
   const allPerson =  await Person.find({})
return res.render("person",{persons:allPerson})
})

module.exports = router
const express = require("express")
const router = express.Router()
const user   = require("../models/User")

router.post("/signup",async(req,res)=>{
    const {name,email,password} = req.body
    await user.create({name,email,password})
    return res.render("index")
})
router.post("/login",async(req,res)=>{
    const {email,password} = req.body
    const User = await user.findOne({email,password})
    if(!User) return res.render("login")
    return res.redirect("/")
})

module.exports = router
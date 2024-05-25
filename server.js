const express   = require ("express")
const db = require("./db")
const app = express() 
const Menurouter = require("./routes/Menu")
const Personrouter  = require("./routes/PersonRoutes")
const bodyParser = require("body-parser") 
require("dotenv").config()
const PORT = process.env.PORT || 4000
  
 
app.get("/",(req,res)=>{
    res.send("welcome to my Farzi cafe , what i can help you?")
})  
//Middlewear
app.use(bodyParser.json())

//use the router
app.use("/person",Personrouter)
app.use("/menu",Menurouter)

 

 
app.listen(PORT,()=>console.log(`Server started at Port ${PORT}`))
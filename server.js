const express   = require ("express")
const db = require("./db")
const app = express() 
const Menurouter = require("./routes/Menu")
const Personrouter  = require("./routes/PersonRoutes")
const bodyParser = require("body-parser")
const PORT = 4000
 
//Middlewear
app.use(bodyParser.json())

//use the router
app.use("/person",Personrouter)
app.use("/menu",Menurouter)

app.get("/",(req,res)=>{
    res.send("welcome to my Farzi cafe , what i can help you?")
})  
app.listen(PORT,()=>console.log(`Server started at Port ${PORT}`))
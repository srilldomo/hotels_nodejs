const mongoose = require("mongoose")

const mongoURL = "mongodb://localhost:27017/Cafe"

mongoose.connect(mongoURL)

const db = mongoose.connection

db.on("connected",()=>{
    console.log("connected successfully to the mongoDB")
})
db.on("error",()=>{
    console.log("error",error)
})
db.on("disconnected",()=>{
    console.log("server disconnected")
})

module.exports = db
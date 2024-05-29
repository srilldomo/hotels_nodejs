const mongoose = require("mongoose")
require("dotenv").config()
//this will be connect to the localdatabase
// const mongoURL = "mongodb://localhost:27017/Cafe"
const mongoURL = process.env.MongoLocal
// const mongoURL = process.env.DB_URL

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
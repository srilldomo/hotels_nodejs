const express = require("express");
const db = require("./db");
const app = express();
const Menurouter = require("./routes/Menu");
const Personrouter = require("./routes/PersonRoutes");
require("dotenv").config();
const path = require("path");
// const Menu = require("./models/menu");
const staticRouter = require("./routes/staticRouter");
const bodyParser = require("body-parser");
const Userrouter = require("./routes/user")

app.use(bodyParser.json());
const PORT = process.env.PORT || 4000; 
const logrequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] req made to: ${req.originalUrl}`
  );
  next();
};

//MIDDLEWEAR
app.use(logrequest);
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); 

//use the router
app.use("/person", Personrouter);
app.use("/menu", Menurouter);
app.use("/",Userrouter)
app.use("/",staticRouter);

app.listen(PORT, () => console.log(`Server started at Port ${PORT}`));

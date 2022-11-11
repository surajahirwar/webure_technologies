const express = require("express")
const app = express()
var cors = require('cors')

const register = require("./controllers/authRegister")
const login = require("./controllers/authLogin")
const dashboard = require("./controllers/dashboard")

app.use(cors())
app.use(express.json())

app.use("/login", login)
app.use("/register", register)
app.use("/dashboard", dashboard)
app.use("/" , async(req,res)=>{
    try{
        return res.status(200).send({
            message: "Welcome to the Dashboard!"
        })
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
    
})








module.exports = app
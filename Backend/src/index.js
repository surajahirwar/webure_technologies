const express = require("express")
const app = express()
var cors = require('cors')

const register = require("./controllers/authRegister")
const login = require("./controllers/authLogin")


app.use(cors())
app.use(express.json())

app.use("/login", login)
app.use("/register", register)







module.exports = app
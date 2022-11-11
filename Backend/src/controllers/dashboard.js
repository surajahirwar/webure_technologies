const express = require("express")
const router = express.Router()

const User = require("../models/userModel")
const jwt = require('jsonwebtoken')
const {validationResult} = require("express-validator")

const passport = require('passport');
require("../middlewares/passportMiddleware")(passport)

const generateToken = (user) =>{
    return  jwt.sign({ user },"webure_technologies")
}



router.get("/", passport.authenticate('jwt', {session:false}), async(req,res)=>{
    try {
            return res.status(200).send({data:true})
    } 
    catch (error) {
        return res.status(400).send(error.message)
    }

})





module.exports = router
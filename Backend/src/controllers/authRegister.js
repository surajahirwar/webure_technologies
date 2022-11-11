const express = require("express")
const router = express.Router()

const User = require("../models/userModel")
const jwt = require('jsonwebtoken')
const {validationResult} = require("express-validator")

const generateToken = (user) =>{
    return  jwt.sign({ name:user.name,email:user.email },"webure_technologies")
}



router.post("/", async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        let user = await User.findOne({email:{$eq:req.body.email}})
        if(user){
            return res.status(400).send({message:"Email id is already exists"})
        }
        user = await User.create(req.body)
        let token=generateToken(user)
        return res.status(200).send({Name:user.name,Token:token,message:"success"})
        
    } 
    catch (error) {
        return res.status(400).send(error.message)
    }

})



module.exports = router
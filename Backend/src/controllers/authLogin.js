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
          return res.status(400).json({ message: errors.array() });
        }
    
        let user=await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send({message:"email id is not valid"})

        }
        const match = user.checkpassword(req.body.password)
 
        if(match){
           let token = generateToken(user)

           return res.status(200).send({Name:user.name,Token:token,message:"success"})
        }

     return res.status(400).send({message:"email id or password are not valid"})
        
    
}
    catch (error) {
        const newLocal = res.status(400).send(error.message)
        return newLocal
    }

    
})
   

module.exports = router
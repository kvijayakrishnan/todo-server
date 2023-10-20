const userModel  = require('../models/userModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Register user
exports.register = async(req, res) =>{
 
    try {
        const {userName, email, password } = req.body;
        if(!userName){
            res.status(400).send({msg:"Please fill the username"})
        }
        if(!email){
            res.status(400).send({msg:"Please fill the email"})
        }
        if(!password){
            res.status(400).send({msg:"Please fill the password"})
        }

        // already existing user in DB 
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({msg:"User is already exists, Please Login"})
        }

        // register user
        const hashValue = await bcrypt.hash(password, 10)
        const hashedPassword = hashValue
        const postUser = await new userModel({
            userName,
            email,
            password : hashedPassword
        }).save();

        res.status(201).send({msg:"User register is done", postUser})
        console.log(postUser)
        
    } catch  {
        res.status(500).send({msg:"Internal server error"})
    }
}


// login 
exports.login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        // console.log(email, password)
        // existing user
        if(!email || !password){
           console.log(email, password)
          res.status(404).send({msg:"Invalid credentials"})
        }
        // check user
        const checkUser = await userModel.findOne({email})
        // console.log(checkUser)
        if(!checkUser){
            return res.status(400).send({msg:"User not found, Please register"})
        }
        // console.log(checkUser.password)
        const checkPassword = await bcrypt.compare(password, checkUser.password)
        // console.log(`the password id ${checkPassword}`)
        if(!checkPassword){
            return res.status(400).send({msg:"invalid credentials"})
        }
        
        const token = await jwt.sign({_id:checkUser._id}, process.env.JWT_SECRET,{expiresIn:'24h'})
        
        return res.status(200).send({msg:"Login successfully", 
            checkUser:{
                _id:checkUser._id,
                userName:checkUser.userName,
                email:checkUser.email,
            },
            token
        })
    } catch (error) {
        return res.status(500).send({msg:"Internal server error"})
    }
}


exports.singnout = async (req, res) =>{
    try {
        await res.clearCookie('accesstoken')
        res.status(201).send({msg:"Logout is successfully"})
    } catch (error) {
        res.status(500).send({msg:"Internal server error"})
    }
}




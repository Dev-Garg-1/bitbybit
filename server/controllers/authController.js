const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');


module.exports.registerUser = async function (req,res) {
    const { name , role , email , password} = req.body;
    try{
        let user = await userModel.findOne({email});
        if(user){
            return res.status(400).send("this account already exists");
        }

        let salt = await bcrypt.genSalt();
        let hash = await bcrypt.hash(password,salt);
        user = await userModel.create({
            email,
            password: hash,
            name,
            role
        })

        let token = generateToken({ email });
            res.cookie("token",token,{
            httpOnly: true,
            secure: true,
            maxAge: 30*24*60*60*1000,
        })
        res.status(201).send(user);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};
module.exports.loginUser = async function (req,res) {
    const { email , password } = req.body;
    try {
        let user = await userModel.findOne({ email });
        if(!user){
            return res.status(500).send("email or password incorrect /accout dont exists")
        } 
        let result = await bcrypt.compare(password,user.password);
        if(result){
            let token = generateToken({ email });
            res.cookie("token",token,{
                httpOnly: true,
                secure: true,
                maxAge: 30*24*60*60*1000,
            })
            res.status(201).send(user);
        }
        else{
            return res.status(500).send("email or password incorrect /accout dont exists")
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
module.exports.logoutUser = function (req,res) {
    res.cookie("token","",{
        httpOnly: true,
        secure: true,
        
    })
    res.status(201).send("logout  successful");
    
};
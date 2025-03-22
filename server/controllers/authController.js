const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

const jwt = require('jsonwebtoken');



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

module.exports.getUserProfile = async function (req, res) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send("Unauthorized");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;

        const user = await userModel.findOne({ email }).select('-password'); // Exclude password from the response
        if (!user) {
            return res.status(404).send("User not found");
        }

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports.getFreelancers = async function (req, res) {
    try {
        const freelancers = await userModel.find({ role: 'FREELANCER' }).select('-password'); // Exclude password from the response
        res.status(200).send(freelancers);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
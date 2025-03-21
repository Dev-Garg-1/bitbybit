const jwt = require('jsonwebtoken');

module.exports.protect = async (req,res,next) => {
    if(req.cookies.token){
        try{
            const data = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
            let user = await userModel.findOne({ email: data.email }).select("-password");
            req.user = user;
            next();

        }catch(err){
            res.status(401).send("not authorized!")
        }
    }
    if(!req.cookies.token){
        res.send(401).send("dont have permission to access this fking page.")
    }
}
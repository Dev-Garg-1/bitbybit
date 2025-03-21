const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to database");
    }
    catch(err){
        console.error("mongodb connection error: " , err);
        process.exit(1);
    }
};

module.exports = connectDB;
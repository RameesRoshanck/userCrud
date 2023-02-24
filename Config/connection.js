const mongoose = require('mongoose');
const URL=process.env.MONGODB_URL
mongoose .set('strictQuery', false);

const ConnectDb=async(req,res)=>{
    try{
     let connect=await mongoose.connect(URL)
       console.log('database is connected');
    }catch(error){
        console.log('database not connected');
    }
}

module.exports=ConnectDb
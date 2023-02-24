const User=require('../Models/userModels')
const bcrypt = require('bcrypt');


//create user
const addUser=async(req,res)=>{
     const{name,email,password}=req.body
     try{
        if(!(name && email && password)){
            return res.status(400).json({message:"all are required"})
        }else{
            let emailExist = await User.findOne({ email });
            // console.log(isUserEmail,'user');
            if(emailExist){
                return res.status(400).json({message:"this email is exist"})
            }else{
                const hash = await bcrypt.hash(password, 10);

                let user=await new User({
                    name,
                    email,
                    password:hash
                })
                res.status(200).json({message:"successfully completed",user})
            }
        }

     }catch(error){
        console.log(error,'user not add')
     }
}

//get all user
const getUser=async(req,res)=>{
    try{
        const user=await User.find();
        res.status(200).json(user)
    }catch(err){
       res.json({message:"error"})
       console.log(err);
    }
}

//get a single user
const singleUser=async(req,res)=>{
    try{
        const id=req.params.id
        const user= await User.findOne({_id:id});
        res.status(200).json(user)

    }catch(error){
        res.json({message:"some error"})
    }
}

//update a user
const updateUser=async(req,res)=>{
    try{
        const {name,email}=req.body
        const id=req.params.id
        const user={name,email,password}
        if(!(name && email)){
            return res.status(400).json({message:"all are required"})
        }else{
        const user=await User.findByIdAndUpdate(id,{
            $set:{
                name:name,
                email:email
            }
        })
        res.status(200).json({message:"succesfully updated",user})
      }
     }catch(error){
      res.json(error)
     }
}

//delete user
const deleteUser=async(req,res)=>{
    try{
        const id=req.params.id
        const deleteuser=await User.findByIdAndDelete(id)
        res.status(200).json("successfully deleted")

    }catch(error){
        res.json({message:"failed to delete"})
    }
}


module.exports={
   addUser,
   getUser,
   singleUser,
   updateUser,
   deleteUser

}
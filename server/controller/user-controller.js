
import bcrypt from "bcryptjs";
import user from "../model/user.js";
export const getalluser=async(req,res,next)=>{
    let users;
    try{console.log("hi");
        //connect mongodb here
        users=await user.find()
       
    }
    catch(err){
        return next();// retuns to the next availeble middleware
    }

    if(!users){
        return res.status(500).json({
            message:'unexpected error occurred'
        })
    }

    return res.status(200).json({users});

}



export const signup=async(req,res,next)=>{
    const{name,email,password}=req.body;
    // we need to decrpt password tpps tore in the database
    if(!name&&name.trim()===''&&!email&&email.trim()===''&!password&&password.trim()===''){
        return res.status(422).json({message:'invalid input'});
    }
    // we have to salt it
    const newpassword=bcrypt.hashSync(password, 10);
   let users;
   try{
    users=new user({
        name,email,password:newpassword
    })
    users =await users.save();
   }
   catch(err){
    //return next(err);
    console.log(err);
   }
   if(!users){
    return res.status(500).json({message:'unexpected error'})
   }
   return  res.status(201).json({users})

}
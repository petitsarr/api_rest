import mongoose from "mongoose" ;
import User from  "../models/User" ;
import bcrypt from "bcrypt" ;

const Myuser = mongoose.model("Myuser",User)


const inscription = async(req,res)=> {
try {

    const {email ,password} = req.body ;

    const passhash =  await bcrypt(password,10) ; 
  
    const newuser = new Myuser({
        email ,
        password : passhash  
    })
    await newuser.save()
    if (newuser) {
    res.status(201).json({
        message : "User creé avec succés"
    })
    }
    else {
        throw new Error("user non crée ")
        
    }
    
} catch (error) {
    res.status(400).send(error)
    
}
   
}


const connection = async ()=>{

}

export {inscription,connection }
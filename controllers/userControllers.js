import mongoose from "mongoose" ;
import User from  "../models/User" ;
import bcrypt from "bcrypt" ; 
import jwt from "jsonwebtoken"

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


const connection = async (req,res)=>{
try {
    const myuser = await Myuser.findOne({
        email : req.body.email 
    })
    if(!myuser) {
        res.status(401).json({
            error :"utilisateur non trouvé "
        })
    }
    else{
        bcrypt.compare(req.body.password , myuser.password) 
        .then((valid)=>{
            if(!valid) {
                res.status(401).json({
                    error :"Mot de pass incorrect"
                })
            }
            else {
                res.status(200).json( {
                    userId : myuser._id ,
                    token :jwt.sign(
                        
                        {userId : myuser._id } ,
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                        
                    )
                })

            }

        })
    }
    
} catch (error) {
   res.status(500).json({ error })
    
}


}

export {inscription,connection } 
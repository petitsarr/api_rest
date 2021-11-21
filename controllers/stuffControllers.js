import mongoose from "mongoose"  ;
import stuff from "../models/StufffModel"; 
import fs from "fs"

const mystuff = mongoose.model("mystuff",stuff)


const addNewStuff = async (req,res) => {
    try {
        const {title,description,price,userId} = req.body ;

     const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}` 

      console.log("mes datas sont ==>",title ,description,imageUrl,price,userId)
     const newStuff = new mystuff({
         title ,
         description ,
         imageUrl ,
         price ,
         userId
     })
     console.log("le nouveau stuff est ===>" ,newStuff )
     await newStuff.save() 
     if(newStuff) {
         res.status(201).json({message : "Object enrigistré avec succés "})
     }
     else {
         throw new Error("Object non Enrigistré")
     }
        
    } catch (error) {
        res.status(400).json({erreur : error})
    }
}

const getStuff = async (req,res)=> {
    try {
        const newStuff = await mystuff.find({})
        if (newStuff) {
            res.status(200).json(newStuff)
        }
        else {
            throw new Error("Aucun objet trouvé")
        }
        
    } catch (error) {
        res.status(400).json({error})
    }
} 



const getStuffById = async(req,res)=> {
    try {
        const newStuff = await mystuff.findOne({
            _id : req.params.stuffId
        })
        if(newStuff) {
          res.status(200).json({hello : newStuff})
        }
        else {
            throw new Error("Pas d'objet trouvé")

        }
    } catch (error) {
        res.status(404).json({error})
    }
}

const updateStuffById = async (req,res) => {
    try {
//On teste si l'user à mis à jour l'image ou pas 
// si req.file existe on traite la nouvelle image ,sinon on traite simplement l'objet entrante
        const mybody = req.file ? { 
            ...req.body ,
            imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

        }  :  
        {
            ...req.body 
        }


        const newStuff = await mystuff.updateOne(
            {
                _id : req.params.stuffId

            } ,
            mybody,
            {
                new : true 
            }
        )
        if(newStuff) {
            res.status(200).json({
                message : "Modification avec Succés"
            })
        }
        else {
            throw new Error ("Modification failed ")
        }
        
    } catch (error) {
        res.status(400).send(error)
    }
}

const deleteStuffById = async (req,res) =>{ 

  mystuff.findOne( {

    _id : req.params.stuffId

})

.then((stuff)=>{
      const filename = stuff.imageUrl.split('/images/')[1] 

      fs.unlink(`images/${filename}`,async ()=>{

        try {
            const newStuff = await stuff.deleteOne(
                {
                    _id : req.params.stuffId
                }
            )
            if(newStuff) {
                res.status(200).json({
                    message : "Suppression avec succés"
                })
    
            }
            else{
                throw new Error("Suppression non réussi")
    
            }
        } catch (error) {
            res.status(400).send(error)
        }

      })
}) 
.catch(error => res.status(500).json({ error }));

    
}


export { addNewStuff, getStuff ,getStuffById,updateStuffById ,deleteStuffById }  
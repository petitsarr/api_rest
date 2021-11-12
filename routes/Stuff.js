import express, { application } from "express" ;

const router = express.Router() ;


router.post(" /api/stuff",(req,res) =>{
    console.log("req est body est ==>" ,req.body)
    res.status(201).send("Objet créée avec succées")

})



router.get("/api/stuff" ,(req,res)=>{

    const stuff = [
        {
          _id: 'oeihfzeoi',
          title: 'Mon premier objet',
          description: 'Les infos de mon premier objet',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
          price: 4900,
          userId: 'qsomihvqios',
        },
        {
          _id: 'oeihfzeomoihi',
          title: 'Mon deuxième objet',
          description: 'Les infos de mon deuxième objet',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
          price: 2900,
          userId: 'qsomihvqios',
        },
      ];

    res.status(200).json(stuff)
}) 



export default router ;
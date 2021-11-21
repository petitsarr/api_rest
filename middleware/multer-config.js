import multer from "multer"; 

// Définir  Où stocker les fichiers...
const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname);
    }
}) 
// Fonction pour contrôler quels fichiers sont acceptés 
const fileFilter = (req, file, cb) => {
    if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
        cb(null, true);
    } else{
        cb(null, false);

    }

}; 
// Nous passons à multer notre constante storage et lui indiquer  .
//que nous gérons uniquement les téléchargements de fichiers image avec single . 
let upload = multer({
    storage : storage ,
    fileFilter : fileFilter
})

export default upload.single("imageUrl")
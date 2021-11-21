import express from "express" ;
import  { addNewStuff, getStuff ,getStuffById,updateStuffById ,deleteStuffById} from "../controllers/stuffControllers" 
import auth from "../Auth/auth" 
import upload from "../middleware/multer-config"
const router = express.Router() ;

router.post("/api/stuff",auth ,upload ,addNewStuff)

router.get("/api/stuff" , auth  ,getStuff ) 

router.get("/api/stuff/:stuffId" , auth ,getStuffById) 

router.put("/api/stuff/:stuffId", auth ,upload  ,updateStuffById ) 

router.delete("/api/stuff/:stuffId", auth ,deleteStuffById) 

export default router ;
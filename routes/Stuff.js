import express from "express" ;
import  { addNewStuff, getStuff ,getStuffById,updateStuffById ,deleteStuffById} from "../controllers/stuffControllers" 

const router = express.Router() ;

router.post("/api/stuff",addNewStuff)

router.get("/api/stuff" ,getStuff ) 

router.get("/api/stuff/:stuffId" ,getStuffById) 

router.put("/api/stuff/:stuffId",updateStuffById ) 

router.delete("/api/stuff/:stuffId",deleteStuffById) 

export default router ;
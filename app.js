import express from "express" ;
import cors from "cors"
import router from "./routes/Stuff" 
import Urouter from "./routes/userRoutes" ;
import mongoose from "mongoose"

const app = express() ;

// Connection à ma base de donnée Atlas .
mongoose.connect('mongodb+srv://petit:kakatores22@cluster0.mks6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


  app.use(express.urlencoded({
      extended :true
  }))
  
  app.use(express.json())

app.use("/",router)
app.use("/auth",Urouter)

app.listen(process.env.PORT || 3200)
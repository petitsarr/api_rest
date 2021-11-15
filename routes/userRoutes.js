import express from "express"
import {inscription,connection } from "../controllers/userControllers"
import  User from "../models/User" ;

const Urouter = express.Router() ;

// pour l'inscription 
Urouter.post("/signup",inscription)

// pour la connection ...
Urouter.post("/login",connection)


export default Urouter ;




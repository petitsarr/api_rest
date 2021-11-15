import mongoose from "mongoose" ;

const stuffs = mongoose.Schema  ;

const stuff = new stuffs({
    title :{
        type : String ,
        required : true 
    } ,
    description : {
        type : String ,
        required : true
    } ,
    imageUrl :{
        type : String ,
        required : true
    } ,
    price :{
        type : Number ,
        required : true
    } ,
    userId : String

})

export default stuff ;
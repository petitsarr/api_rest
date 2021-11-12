import mongoose from "mongoose" ;

const stuff = mongoose.Schema  ;

const stuff = new stuff({
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
        type : String ,
        required : true
    } ,
    userId : {
        type : String ,
        required : true
    }

})

export default stuff ;
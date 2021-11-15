import mongoose from 'mongoose' ; 
import uniqueValidator from "mongoose-unique-validator"

const userScheme = mongoose.Schema ;

const User = new userScheme ({
    email : {
        type : String ,
        required : true ,
        unique : true
    } ,
    password : {
        type : String ,
        required : true
    }
})


User.plugin(uniqueValidator) ; 

export default User ;


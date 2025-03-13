const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true,'email is requireed'],
        trim:true,
        unique:[true,"email must be unique"],
        minLength:[5,"email must have 5 character"],
        lowercase:true,
    },
    password:{
        type:String,
        required:[true,'password is requireed'],
        trim:true,
        select:false,
        minLength:[7,"password must have 7 character"],
    },
    verified:{
        type:Boolean,
        default:false,
    },
    verificationCode:{
        type:Number,
        select:false,
    },
    forgotPassCode:{
        type:String,
        select:false,
    },
   
    forgotPassCodeValidation:{
        type:Number,
        select:false,
    },
},{
    timestamps:true
});

module.exports = mongoose.model("User",userSchema)
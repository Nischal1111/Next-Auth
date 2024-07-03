import mongoose from "mongoose";
import { type } from "os";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please fill in your name."]
    },
    email:{
        type:String,
        required:[true,"Please fill in your email."],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please fill in your password."],
        minlength:8,
        maxlength:30
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    }
})

export default User = mongoose.model.users || mongoose.model("users",userSchema)


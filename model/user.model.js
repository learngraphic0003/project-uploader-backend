import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({

    email : {  type: String, require: true, unique: true},
    password : {  type: String, require: true},
    avatar : {type: String},
    role: {  type : String , enum  : [ "user", "admin"], default : "user" },

},{timestamps: true})

 const User =  mongoose.model("User",UserSchema)

 export default User
//first is to import mongoose

import mongoose from "mongoose";

//then as second step create a schema 
//schema is a function in which we create blueprint of the model
const userSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: "Password is required"
    },
   
}, {timestamps: true}
)

//then as third step create a model
//first parameter is the name of the model
//second parameter is the schema
export const User = moongoose.model("User", userSchema);
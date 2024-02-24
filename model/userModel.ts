import mongoose, { Model, Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String},
    email: { type: String },
    password: { type: String }
}, 
{ timestamps: true }
);

const userModel = new Model("user", userSchema);

export default userModel;

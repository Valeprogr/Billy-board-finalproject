import mongoose from "mongoose";

const User = new mongoose.Schema({
"name": {type: String, required: true },
"lastname": {type: String, required:true},
"email": {type: String, required: true},
"password" : {type: Number, required:true},
"its_Admin": {type: Boolean, default:false},
"company_name": {type: String, required:true},
"user_occupation":{type: String, required:true}
})

export default mongoose.model("User",User);
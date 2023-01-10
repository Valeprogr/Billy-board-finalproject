import mongoose from "mongoose";

const Project = new mongoose.Schema({
    "name": {type: String, required: true},
    "location": {type:String, required: true},
    "start_date":{type:String, required:true},
    "end_date":{type:String, required:true},
    "company_name": {type: String, required:true}
})

export default mongoose.model("Project", Project)
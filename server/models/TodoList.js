import mongoose from "mongoose";

const TodoList = new mongoose.Schema({
    'title': {type: String, required:true},
    'projectID': {type: String,required:true},
    'todos': [{type: mongoose.Schema.Types.ObjectId, ref:'Todo'}]
})

export default mongoose.model('TodoList',TodoList);
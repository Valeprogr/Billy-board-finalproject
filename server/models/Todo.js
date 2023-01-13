import mongoose from 'mongoose';

const Todo = new mongoose.Schema({
    "title": { type: String, required: true },
    "text": { type: String, required: true },
    "importance": { type: String, required: true },
    "done": { type: Boolean, required: true, default: false },
    "todoList_id": { type: mongoose.Schema.Types.ObjectId, ref: 'TodoList', default: null }
})

export default mongoose.model("Todo", Todo);
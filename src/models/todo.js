const { Schema, default: mongoose } = require("mongoose");

export const todoSchema = new Schema({
    title: String,
    description: String,
    status: String
})

export const todo = mongoose.models.todos || mongoose.model('todos', todoSchema)
const mongoose = require('mongoose')

const Schema = mongoose.Schema
// schema defines how the docs must look
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
},{ timestamps: true })
// models gives us access and in this case the model is called 'Workout'
module.exports = mongoose.model('Workout', workoutSchema)
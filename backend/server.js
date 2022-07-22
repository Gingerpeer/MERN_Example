require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')


// express app call
const app = express()

// middleware
// to look at req.body
app.use(express.json())

app.use((req, res, next)=>{
  console.log(req.path, req.method)
  next()
})
// routes
app.use('/api/workouts/', workoutRoutes)
app.use('/api/user/', userRoutes)

// connect to db
// ### Remember that the ip address allocation must be changed if your ip changes at mongodb network access
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    // listen for requests
  app.listen(process.env.PORT, ()=>{
  console.log('Connected to db and Listening on port ' + process.env.PORT)
})
  })
  .catch((error)=>{console.log(error)})

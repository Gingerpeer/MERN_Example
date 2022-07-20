const express = require('express');


// express app call
const app = express()

// routes
app.get('/', (req,res)=>{
  res.json({msg: 'welcome to the app'})
})

// listen for requests
app.listen(4000, ()=>{
  console.log('Listening on port 4000')
})
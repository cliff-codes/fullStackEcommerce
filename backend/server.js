const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT =  process.env.PORT
const password = process.env.DATABASE_PASSWORD
const DATABASE_URL = `mongodb+srv://simplecodes2580:${password}@cluster0.m6zj2xz.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => { 
    console.error('Error connecting to the database', error)
});

 

app.listen(PORT || 3000,() => {
    console.log(`app is listening on ${PORT}`) 
})
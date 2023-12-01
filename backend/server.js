require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')
//express app
const app = express()
//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/workouts', workoutRoutes)

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  try {
    mongoose.connect(
      'mongodb+srv://quytranquil:101003@admin.vssgzcv.mongodb.net/?retryWrites=true&w=majority',
    )
    console.log('Database connected')
  } catch (error) {
    console.log(error)
    console.log('Database connection failed')
  }
})

database()

//listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})

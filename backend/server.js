require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PayPage = require('./modul/historypaypage')
const workoutRoutes = require('./routes/workouts')
//express app
const app = express()
//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.post('/historypaypage', async (req, res) => {
  try {
    // Dữ liệu được gửi từ client
    const data = {
      MaDon: '11222',
      time: '10/10/2023',

      NumPage: 5,
      Money: 6,
    }

    // Tạo một đối tượng mới của model Test
    const newTestData = new PayPage(data)

    // Lưu đối tượng mới vào MongoDB
    const savedData = await newTestData.save()

    // Trả về dữ liệu đã được chèn dưới dạng JSON
    res.json(savedData)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
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

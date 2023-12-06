const mongoose = require('mongoose')

const PrintCalendar = new mongoose.Schema({
  MaIn: String,
  name: String,
  mssv: String,
  time: Date,
  birth: Date,
  sex: String,
  MayIn: String,
  address: String,
  tailieu: String,
  type: String,
  NumA3: Number,
  NumA4: Number,
  SoMatIn: Number,
  SoBanIn: Number,
})

module.exports = mongoose.model('printcalendar', PrintCalendar)

const mongoose = require('mongoose')

const PayPage = new mongoose.Schema({
  MaDon: String,
  time: Date,

  NumPage: Number,
  Money: Number,
})

module.exports = mongoose.model('paypage', PayPage)

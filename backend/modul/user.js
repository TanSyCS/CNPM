const mongoose = require('mongoose')
const User = mongoose.Schema({
  name: String,
  mssv: String,
  khoa: String,
  birth: String,
  sex: String,
  address: String,
  email: String,
  phone: String,
  password: String,

  type: String,
})
module.exports = mongoose.model('user', User)

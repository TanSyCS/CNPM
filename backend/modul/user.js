const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  mssv: String,
  khoa: String,
  birth: Date,
  sex: String,
  address: String,
  email: {
    type: String,
    select: false,
  },
  phone: {
    type: String,
    select: false,
  },
  password: {
    type: String,
    select: false,
  },
  numPage: String,
  type: String,
})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel

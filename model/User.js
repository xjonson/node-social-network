const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  password2: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    default: Date.now()
  },
})


module.exports = User = mongoose.model('users', UserSchema);
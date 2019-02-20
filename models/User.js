const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    // trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: `https://joeschmoe.io/api/v1/${Date.now}`
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
  },
})

module.exports = mongoose.model('User', UserSchema)
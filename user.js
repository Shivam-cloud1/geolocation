const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  address: {
    type: string,
    required: true
  },
  location: {
    type: {
      type: String,  
      enum: ['Point'], 
      required: true
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }
  },
  role: {
    type: string,
    required: true
    
  }
})

module.exports = mongoose.model('users', userSchema)
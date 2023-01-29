const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

mongoose.connect(url)
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const userDataSchema = new mongoose.Schema({
  userID: String,
  description: String,
  offerFoodWater: {
    type: Boolean,
    required: false
  },
  offerFirstAid: {
    type: Boolean,
    required: false
  },
  offerTransportation: {
    type: Boolean,
    required: false
  },
  offerShelter: {
    type: Boolean,
    required: false
  }
})

userDataSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('UserData', userDataSchema)
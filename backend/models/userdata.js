const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const userDataSchema = new mongoose.Schema({
  userID: String,
  offerFoodWater: {
    type: Boolean,
    required: false
  },
  offerFirstAid: {
    type: Boolean,
    required: false
  },
  offerRides: {
    type: Boolean,
    required: false
  },
  offerHousing: {
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
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

mongoose.connect(url)
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const trailSchema = new mongoose.Schema({
  name: String,
  angels: {
    type: Array,
    required: false
  }
})

trailSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Trail', trailSchema)
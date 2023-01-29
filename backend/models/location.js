const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

mongoose.connect(url)
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const locationSchema = new mongoose.Schema({
  userID: String,
  type: String,
  geometry: {
    type: {
      type: String
    },
    coordinates: {
      type: Object,
      latitude: {
        type: String
      },
      longitude: {
        type: String
      }
    }
  },
  properties: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    type: {
      type: String
    }
  }
})

locationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Location', locationSchema)
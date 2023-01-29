const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const User = require('./models/user')
const UserData = require('./models/userdata')
const Trail = require('./models/trail')
const Location = require('./models/location')

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(express.static('build'))

app.get('/api/users', (request, response) => {
  User.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/trails', (request, response) => {
  Trail.find({}).then(trail => {
    response.json(trail)
  })
})

app.post('/api/trails', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'missing data' })
  }

  const trail = new Trail({
    name: body.name
  })

  trail.save().then(savedTrail => {
    response.json(savedTrail)
  })
})

app.get('/api/locations', (request, response) => {
  Location.find({}).then(location => {
    response.json(location)
  })
})

app.get('/api/username/:id', (request, response) => {
  User.findById(request.params.id, function (err, docs) {
    if (err) {
      console.log(err);
    }
    else {
      response.json(docs)
    }
  })
})

app.post('/api/locations', (request, response) => {
  const body = request.body
  const location = new Location({
    userID: body.userID,
    type: body.type,
    geometry: {
      type: body.geometry.type,
      coordinates: [{
        latitude: body.geometry.coordinates.longitude,
        longitude: body.geometry.coordinates.latitude
      }]
     }, 
    properties: {
      title: body.properties.title,
      description: body.properties.description,
      type: body.properties.type
    }
  })
  location.save().then(savedLocation => {
    response.json(savedLocation)
  })
})

app.post('/api/users', (request, response) => {
  const body = request.body

  if (body.username === undefined || body.password === undefined) {
    return response.status(400).json({ error: 'missing data' })
  }

  const user = new User({
    username: body.username,
    password: body.password,
    isAngel: body.isAngel,
    trail: body.trail,
    fullName: body.fullName
  })

  user.save().then(savedNote => {
    console.log(savedNote._id.toString())
    const userData = new UserData({
      userID: savedNote._id.toString(),
      description: body.description
    })
    console.log(userData)
    userData.save().then(savedUserData => {
      response.json(savedUserData)
    })
  })
})

app.get('/api/users/:id', (request, response) => {
  UserData.find({ userID: request.params.id })
    .then(user => {
      if (user) {
        response.json(user)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/locations', (request, response) => {
  Location.find({ userID: request.body.userID, type: request.body.type })
    .remove()
    .exec()
})

app.put('/api/trails/:id', (request, response, next) => {
  const body = request.body

  Trail.findById(request.params.id, function (err, docs) {
    if (err) {
      console.log(err);
    }
    else {
      docs.angels.push(body.newAngel)
      Trail.findByIdAndUpdate(request.params.id, docs, { new: true })
        .then(updatedTrail => {
          response.json(updatedTrail)
        })
        .catch(error => next(error))
    }
  })
})

app.put('/api/users/:id', (request, response, next) => {
  //TODO update user data via userData model
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

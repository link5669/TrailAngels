const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const User = require('./models/user')

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

app.post('/api/users', (request, response) => {
  const body = request.body

  if (body.username === undefined || body.password === undefined) {
    return response.status(400).json({ error: 'missing data' })
  }

  const user = new User({
    username: body.username,
    password: body.password,
    isAngel: body.isAngel
  })

  user.save().then(savedNote => {
    response.json(savedNote)
  })
})

app.get('api/users', (request, response) => {
    User.findById(request.params.id)
    .then(user => {
      if (user) {
        response.json(user)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/users/:id', (request, response, next) => {
    User.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/users/:id', (request, response, next) => {
    const body = request.body

    const user = {
      username: body.username,
      password: body.password,
      isAngel: body.isAngel
    }
  
    User.findByIdAndUpdate(request.params.id, user, { new: true })
      .then(updatedUser => {
        response.json(updatedUser)
      })
      .catch(error => next(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
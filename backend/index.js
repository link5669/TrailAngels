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
  //post request
})

app.get('/api/notes/:id', (request, response, next) => {
  //get request
})

app.delete('/api/notes/:id', (request, response, next) => {
  //delete request
})

app.put('/api/notes/:id', (request, response, next) => {
  //put request
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
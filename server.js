const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (request, response) => {
  response.status(200).send(
    "Hi, I'm Sasi Rishikesh. Welcome to my first Express server!"
  )
})

app.get('/about', (request, response) => {
  response.status(200).json({
    name: 'Sasi Rishikesh',
    section: 'AIDE 2B'
  })
})

app.get('/time', (request, response) => {
  response.status(200).json({
    currentTime: new Date().toISOString(),
    timezone: 'UTC'
  })
})

app.use((request, response) => {
  response.status(404).send("Sasi's server could not find that page.")
})

app.listen(port, () => {
  console.log(`Sasi's Express server is listening at http://localhost:${port}`)
})

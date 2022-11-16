const express = require('express')
const app = express()
const port = 3000

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/users', (req, res) => {
    res.send('Got a POST request')
  })

app.post('/users/1', (req, res) => {
    const user = {
        id: 1,
        nama: "Kiki Agustin",
        umur: 23
    }
    res.send(user)
  })
app.post('/users/2', (req, res) => {
    const user = {
        id: 2,
        nama: "Jajang ",
        umur: 23
    }
    res.send(user)
  })

  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
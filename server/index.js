const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const bodyParser = require('body-parser')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/access', (req, res) => {
  res.redirect('https://tacomatic.herokuapp.com')
})

app.post('/register', (req, res) => {
  // save req.body username & password to db
  res.send('Registered!')
})

app.post('/signin', (req, res) => {
  res.send('Signed in!')
})

app.delete('/delete', (req, res) => {
  res.send('User profile deleted!')
})

app.put('/update', (req, res) => {
  res.send('Password updated!')
})

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Listening on port ${port}.`,
    badge: true
  })
}
start()

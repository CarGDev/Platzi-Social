const express = require('express')
const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express')

const config = require('../config')
const user = require('./components/user/network')
const errors = require('../network/errors')
const post = require('./components/post/network')
const app = express()

app.use(bodyParser.json())

const swaggerDoc = require('./swagger.json')
const auth = require('./components/auth/network')
// ROUTER

app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api/post', post)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(errors)

app.listen(config.api.port, () => {
  console.log(`Api escuchando en el puerto ${config.api.port}`)
})
//

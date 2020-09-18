const express = require('express')
const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express')
const likes = require('./components/likes/network')
const config = require('../config')
const user = require('./components/user/network')
const errors = require('../network/errors')
const app = express()

app.use(bodyParser.json())

const swaggerDoc = require('./swagger.json')
const auth = require('./components/auth/network')
// ROUTER

app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api/likes', likes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(errors)

app.listen(config.api.port, () => {
  console.log(`Api escuchando en el puerto ${config.api.port}`)
})
//

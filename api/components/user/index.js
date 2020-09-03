// const store = require('../../../store/mysql')
const config = require('../../../config')
let store
let cache
if (config.remoteDB === false) {
  store = require('../../../store/remote-mysql')
  cache = require('../../../store/remote-cache')
} else {
  store = require('../../../store/mysql')
  cache = require('../../../store/redis')
}
const ctrl = require('./controller')

module.exports = ctrl(store)

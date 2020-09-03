// const store = require('../../../store/mysql')
const config = require('../../../config')
let store
if (config.remoteDB === false) {
  store = require('../../../store/remote-mysql')
}
const ctrl = require('./controller')

module.exports = ctrl(store)

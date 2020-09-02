const TABLA = 'post'

module.exports = function (injectedStore) {
  let store = injectedStore
  if (!store) {
    store = require('../../../store/dummy')
  }

  function list () {
    return store.list(TABLA)
  }

  function getPost (user) {
    return store.get(TABLA, user)
  }

  return {
    list,
    getPost
  }
}

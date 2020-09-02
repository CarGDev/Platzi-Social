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

  async function upsert (body) {
    const user = {
      text: body.text,
      user: body.user
    }
    return store.upsert(TABLA, user)
  }

  return {
    list,
    getPost,
    upsert
  }
}

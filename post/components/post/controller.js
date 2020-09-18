const { nanoid } = require('nanoid')
const TABLA = 'post'
const ID = 'id'

module.exports = function (injectedStore) {
  let store = injectedStore
  if (!store) {
    store = require('../../../store/dummy')
  }

  function list () {
    return store.list(TABLA)
  }

  function getPost (user) {
    return store.get(TABLA, user, ID)
  }

  async function upsert (body) {
    const user = {
      text: body.text,
      user: body.user
    }

    if (body.id) {
      user.id = body.id
    } else {
      user.id = nanoid()
    }

    return store.upsert(TABLA, user)
  }

  return {
    list,
    getPost,
    upsert
  }
}

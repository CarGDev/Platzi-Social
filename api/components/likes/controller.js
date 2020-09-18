const TABLA = 'like'
const TABLA_ID = `${TABLA}_from`
const TABLA_COMPLETA = `${TABLA}_follow`

module.exports = function (injectedStore) {
  let store = injectedStore
  if (!store) {
    store = require('../../../store/dummy')
  }

  function list () {
    return store.list(TABLA_COMPLETA)
  }

  function postsLiked (user) {
    return store.get(TABLA_COMPLETA, user, TABLA_ID)
  }

  async function postLikers (body, userId) {
    const user = {
      like_from: userId,
      post_like: body.post,
      post_user: body.user
    }
    return store.upsert(TABLA_COMPLETA, user)
  }

  return {
    list,
    postsLiked,
    postLikers
  }
}

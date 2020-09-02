const express = require('express')
const secure = require('./secure')
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

// Routes
// router.get('/like', secure('logged'), postsLiked)
router.get('/', list)
router.get('/:id', getPost)
// router.get('/:id/like', secure('logged'), postLikers)
// router.post('/', secure('owner'), upsert)
// router.put('/', secure('owner'), upsert)
// router.post('/:id/like', secure('owner'), postLikers)

// Functions
function list (req, res, next) {
  Controller.list()
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

function getPost (req, res, next) {
  Controller.getPost(req.params.id)
    .then (data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

// function upsert (req, res, next) {
//   //
//     .then (data => {
//       response.success(req, res, data, 200)
//     })
//     .catch(next)
// }

// function like (req, res, next) {
//   //
//     .then (data => {
//       response.success(req, res, data, 200)
//     })
//     .catch(next)
// }

// function postsLiked (req, res, next) {
//   //
//     .then (data => {
//       response.success(req, res, data, 200)
//     })
//     .catch(next)
// }

// function postLikers (req, res, next) {
//   //
//     .then (data => {
//       response.success(req, res, data, 200)
//     })
//     .catch(next)
// }

module.exports = router

const express = require('express')
const secure = require('./secure')
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

// Routes
router.get('/:id/user', secure('owner'), postsLiked)
router.get('/', list)
router.post('/:id/like', secure('owner'), postLikers)

// Functions
function list (req, res, next) {
  Controller.list()
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

function postsLiked (req, res, next) {
  Controller.postsLiked(req.params.id)
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

function postLikers (req, res, next) {
  Controller.postLikers(req.body, req.params.id)
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

module.exports = router

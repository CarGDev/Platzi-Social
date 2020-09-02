const express = require('express')
const secure = require('./secure')
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

// Routes
router.get('/', list)
router.get('/like', secure('logged'), postsLiked)
router.get('/:id/like', secure('logged'), postLikers)
router.post('/:id/like', secure('owner'), postLikers)

// Functions
function list (req, res, next) {
  Controller.list()
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

function like (req, res, next) {
  //
    .then (data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

function postsLiked (req, res, next) {
  //
    .then (data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

function postLikers (req, res, next) {
  //
    .then (data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

module.exports = router

const express = require('express')
const secure = require('./secure')
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

// Routes
router.get('/', list)
router.get('/:id', getPost)
router.post('/', secure('owner'), upsert)
router.put('/', secure('owner'), upsert)

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
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

function upsert (req, res, next) {
  Controller.upsert(req.body)
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(next)
}

module.exports = router

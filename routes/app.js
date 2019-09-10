const express = require('express')
const container = require('../container')
const TYPES = require('../config/types')
const router = express.Router()

const controller = container.get(TYPES.AppController)

router.get('/', (...args) => controller.index(...args))

module.exports = router

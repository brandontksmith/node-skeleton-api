const config = require('../config')

class AppController {
  index(req, res) {
    res.send({
      "title": "Skeleton API",
      "version": config.APP_VERSION,
      "description": "Skeleton API in Node.js"
    })
  }
}

module.exports = AppController

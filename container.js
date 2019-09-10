const inversify = require('inversify')
const TYPES = require('./config/types')
require('reflect-metadata')

// Require Services
const AuthService = require('./services/auth')

// Require Controllers
const AppController = require('./controllers/app')

// Declare Injectables and Dependencies
inversify.decorate(inversify.injectable(), AuthService)
inversify.decorate(inversify.injectable(), AppController)

/**
 * Example Service Injection
 * inversify.decorate(inversify.inject(TYPES.AuthService), AppController, 0)
 */

// Create Container
const container = new inversify.Container()

// Declare Bindings
container.bind(TYPES.AuthService).to(AuthService)
container.bind(TYPES.AppController).to(AppController)

module.exports = container

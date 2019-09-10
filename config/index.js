/**
 * Configuration
 */

require('dotenv').config()

const APP_PORT = process.env.APP_PORT
const APP_ENV = process.env.APP_ENV || "dev"
const APP_VERSION = process.env.APP_VERSION || "Unknown"

module.exports = {
  APP_PORT, APP_ENV, APP_VERSION
}

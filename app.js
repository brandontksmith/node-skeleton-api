const config = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const app = express()

// Define Routes
const appRouter = require('./routes/app')

// Define Middleware
const authMiddleware = require('./middleware/auth')

app.use(helmet())
app.use(bodyParser.json())

// @todo: Add CORS

app.use(authMiddleware)

app.use('/', appRouter)

app.listen(config.APP_PORT, () => console.log(`Skeleton API listening on port ${config.APP_PORT}`))

const TYPES = require('../config/types')
const container = require('../container')

const authService = container.get(TYPES.AuthService)

module.exports = async function(req, res, next) {
  const token = req.headers['authorization']

  if (!token) {
    return res.status(401).send({
      error: "Unauthorized"
    })
  }

  const tokenPieces = token.split(' ')

  // Verify JWT
  const { success, data } = await authService.verifyToken(tokenPieces[1])

  if (!success) {
    return res.status(403).send({
      error: "Bad Token"
    })
  }

  // Ensure the Token is Valid
  const isValid = await authService.isTokenValid(tokenPieces[1])

  if (!isValid) {
    return res.status(403).send({
      error: "Token Invalidated"
    })
  }

  req.user = await userService.getById(data['sub'])

  next();
};

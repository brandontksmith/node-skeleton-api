const jwt = require('jsonwebtoken')

class AuthService {

  async getPublicKey() {
    // Retrieve the Public Key
    // It might be available at an alternate URL if Auth is handled outside the App
    // Or, it could be stored and accessed via AWS S3

    return null
  }

  async verifyToken(token) {
    let success = true
    let data = null

    let publicKey = this.publicKey

    if (!publicKey) {
      publicKey = await this.getPublicKey()
    }

    const options = {
      algorithms: ['RS256'], // Depends on the Auth Provider
      audience: 'api' // Depends on the Auth Provider
    }
    
    try {
      data = jwt.verify(token, publicKey, options)
    } catch (e) {
      success = false
      data = e
    }

    return { success, data }
  }

  async isTokenValid(token) {
    // Check if Token has been Invalidated
    // Storage Options might be Redis or DynamoDB, with the TTL equal to the Token Expiration

    return true
  }
}

module.exports = AuthService

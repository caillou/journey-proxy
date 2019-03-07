module.exports = function requestHeaders (token) {
  return {
    Authorization: `Bearer ${token}`,
    'Log-Context': 'poc-web-components',
    'WSG-Credentials': process.env.JOURNEY_TOKEN_CLIENT_WSG_CREDENTIALS,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

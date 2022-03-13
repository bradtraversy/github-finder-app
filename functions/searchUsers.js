const github = require('./utils/github')

exports.handler = async function (event) {
  const params = new URLSearchParams(event.queryStringParameters)
  const response = await github.get(`/search/users?${params}`)
  return {
    statusCode: 200,
    body: JSON.stringify(response.data.items),
  }
}

require('dotenv').config()
const axios = require('axios')

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
})

module.exports = github

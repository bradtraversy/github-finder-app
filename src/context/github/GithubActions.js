import axios from 'axios'

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const response = await axios.get(`/api/searchUsers?${params}`)
  return response.data
}

// Get user and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({ q: login })
  const response = await axios.get(`/api/getUserAndRepos?${params}`)

  return response.data
}

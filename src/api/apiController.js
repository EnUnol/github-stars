import axios from 'axios'

export const fetchTrendingRepos = async (page = 1) => {
  const today = new Date()
  const tenDaysAgo = new Date(today.setDate(today.getDate() - 10))
  const date = tenDaysAgo.toISOString().split('T')[0]

  const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`
  const response = await axios.get(url)
  return response.data
}

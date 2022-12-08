import axios from 'axios'

const getSearchId = async () => {
  const res = await axios.get('https://aviasales-test-api.kata.academy/search')
  return res.data.searchId
}
const getTicketsData = async (searchId) => {
  try {
    const res = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    const tickets = res.data
    return tickets
  } catch (error) {
    if (error.response.status === 500) return
    throw new Error(error)
  }
}

export { getTicketsData, getSearchId }

import axios from 'axios'

const getTicketsData = async () => {
  try {
    const res = await axios.get('https://aviasales-test-api.kata.academy/search')
    const searchId = res.data.searchId
    const resTickets = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    return resTickets.data.tickets.slice(0, 5)
  } catch (error) {
    throw new Error(error.message)
  }
}

export default getTicketsData

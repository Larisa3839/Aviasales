import getTicketsData from '../api/apiAviasales'

export const SET_FILTERS = 'SET_FILTERS'
export const SET_VISIBILITY_TAB = 'SET_VISIBILITY_TAB'
export const SET_TICKETS = 'SET_TICKETS'
export const VisibilityTabs = {
  SHOW_CHEAPEST: 'SHOW_CHEAPEST',
  SHOW_FASTEST: 'SHOW_FASTEST',
  SHOW_OPTIMAL: 'SHOW_OPTIMAL',
}
export const toggleFilter = (id) => ({ type: SET_FILTERS, id })
export const setVisibilityTab = (id) => ({ type: SET_VISIBILITY_TAB, id })
export const fetchTickets = () => (dispatch) => getTicketsData().then((data) => dispatch({ type: SET_TICKETS, data }))

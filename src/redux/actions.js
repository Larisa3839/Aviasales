import { getTicketsData, getSearchId } from '../api/apiAviasales'

export const SET_FILTERS = 'SET_FILTERS'
export const SET_VISIBILITY_TAB = 'SET_VISIBILITY_TAB'
export const SET_TICKETS = 'SET_TICKETS'
export const SET_COUNT_VISIBILITY_TICKETS = 'SET_COUNT_VISIBILITY_TICKETS'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADED = 'SET_LOADED'
export const VisibilityTabs = {
  SHOW_CHEAPEST: 'SHOW_CHEAPEST',
  SHOW_FASTEST: 'SHOW_FASTEST',
  SHOW_OPTIMAL: 'SHOW_OPTIMAL',
}
export const toggleFilter = (id) => ({ type: SET_FILTERS, id })
export const setVisibilityTab = (id) => ({ type: SET_VISIBILITY_TAB, id })
export const setError = (isError) => ({ type: SET_ERROR, isError })
export const setLoaded = (isLoaded) => ({ type: SET_LOADED, isLoaded })
export const fetchTickets = () => async (dispatch) => {
  const searchId = await getSearchId()
  let stop = false
  while (!stop) {
    try {
      const data = await getTicketsData(searchId)
      if (!data) continue
      dispatch({ type: SET_TICKETS, data: data.tickets })
      stop = data.stop
      if (stop) dispatch(setLoaded(true))
    } catch (error) {
      dispatch(setError(true))
    }
  }
}

export const setCountVisibilityTickets = (value) => ({ type: SET_COUNT_VISIBILITY_TICKETS, value })

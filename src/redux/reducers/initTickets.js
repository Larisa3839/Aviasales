/* eslint-disable indent */
import { SET_LOADED, SET_ERROR } from '../actions'
import { initTickets } from '../store'

const reducer = (state = initTickets, action) => {
  switch (action.type) {
    case SET_LOADED:
      return { ...state, isLoaded: action.isLoaded }
    case SET_ERROR:
      return { ...state, isError: action.isError }
    default:
      return state
  }
}

export default reducer

/* eslint-disable indent */
import { SET_COUNT_VISIBILITY_TICKETS } from '../actions'
import { countVisibilityTickets } from '../store'

const reducer = (state = countVisibilityTickets, action) => {
  switch (action.type) {
    case SET_COUNT_VISIBILITY_TICKETS:
      return action.value
    default:
      return state
  }
}

export default reducer

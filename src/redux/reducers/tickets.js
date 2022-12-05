/* eslint-disable indent */
import { SET_TICKETS } from '../actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default reducer

/* eslint-disable indent */
import { SET_TICKETS } from '../actions'

const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, data: [...state.data, ...action.data] }
    default:
      return state
  }
}

export default reducer

/* eslint-disable indent */
import { SET_VISIBILITY_TAB } from '../actions'
import { initialStateTabs } from '../store'

const reducer = (state = initialStateTabs, action) => {
  switch (action.type) {
    case SET_VISIBILITY_TAB:
      return { ...state, data: state.data.map((tab) => ({ ...tab, isActive: tab.id === action.id ? true : false })) }
    default:
      return state
  }
}

export default reducer

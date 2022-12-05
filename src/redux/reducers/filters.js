/* eslint-disable indent */
import { SET_FILTERS } from '../actions'
import { initialStateFilters } from '../store'

const setFilters = (stateFilters, idFilter) => {
  switch (true) {
    case idFilter === 1:
      return stateFilters.map((item) => ({ ...item, isChecked: !stateFilters[0].isChecked }))
    case stateFilters[0].isChecked:
      return stateFilters.map((item) =>
        item.id === idFilter
          ? { ...item, isChecked: !item.isChecked }
          : { ...item, isChecked: item.id === 1 ? false : item.isChecked }
      )
    case stateFilters.filter((item) => item.isChecked || (item.id === idFilter && !item.isChecked)).length === 4:
      return stateFilters.map((filter) => ({ ...filter, isChecked: true }))
    default:
      return stateFilters.map((filter) =>
        filter.id === idFilter ? { ...filter, isChecked: !filter.isChecked } : filter
      )
  }
}
const reducer = (state = initialStateFilters, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        data: setFilters(state.data, action.id),
      }
    default:
      return state
  }
}

export default reducer

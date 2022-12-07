import { combineReducers } from 'redux'

import ticketsReducer from './tickets'
import filtersReducer from './filters'
import tabsReducer from './tabs'

const redusers = combineReducers({ ticketsReducer, filtersReducer, tabsReducer })
export default redusers

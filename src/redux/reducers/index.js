import { combineReducers } from 'redux'

import ticketsReducer from './tickets'
import filtersReducer from './filters'
import tabsReducer from './tabs'

const aviasalesApp = combineReducers({ ticketsReducer, filtersReducer, tabsReducer })
export default aviasalesApp

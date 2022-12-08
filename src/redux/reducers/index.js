import { combineReducers } from 'redux'

import ticketsReducer from './tickets'
import filtersReducer from './filters'
import tabsReducer from './tabs'
import countReducer from './count'
import initTicketsReducer from './initTickets'

const redusers = combineReducers({ ticketsReducer, filtersReducer, tabsReducer, countReducer, initTicketsReducer })
export default redusers

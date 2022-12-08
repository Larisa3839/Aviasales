/* eslint-disable indent */
import { connect } from 'react-redux'
import _ from 'lodash'

import Tickets from '../Tickets'

const getSortTickets = (tickets, filter) => {
  switch (filter.id) {
    case 1:
      return _.sortBy(tickets, 'price')
    case 2:
      return tickets.sort((a, b) => {
        let timeA = 0
        let timeB = 0
        a.segments.forEach((e) => {
          timeA = timeA + e.duration
        })
        b.segments.forEach((e) => {
          timeB = timeB + e.duration
        })
        return timeA > timeB ? 1 : -1
      })
    case 3:
      return _.sortBy(tickets, 'price', 'duration')
    default:
      throw new Error('Unknown filter: ' + filter.id)
  }
}

const getFilteredTickets = (tickets, filters) => {
  if (filters.some((f) => f.id === 1)) return tickets
  if (!filters.length) return []
  return tickets.filter((ticket) =>
    filters.some((filter) => ticket.segments.every((i) => i.stops.length === filter.value))
  )
}

const mapStateToProps = (store) => ({
  tickets: getFilteredTickets(
    getSortTickets(
      store.ticketsReducer.data,
      store.tabsReducer.data.find((tab) => tab.isActive)
    ),
    store.filtersReducer.data.filter((f) => f.isChecked)
  ),
  count: store.countReducer,
})
export default connect(mapStateToProps)(Tickets)

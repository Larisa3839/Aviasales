import { Alert } from 'antd'

import Ticket from '../Ticket'
import './Tickets.scss'

const Tickets = ({ tickets, count }) => {
  if (!tickets.length) return <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />
  const ticketsEl = tickets
    ? tickets.map((ticket, index) => (index < count ? <Ticket key={index} ticket={ticket} /> : null))
    : null
  return <ul className="results__tickets">{ticketsEl}</ul>
}

export default Tickets

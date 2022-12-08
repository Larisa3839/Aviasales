import { getformatPrice, getTimeOnFly, getBoardingTime, getFormatTransfer } from '../../utils/formatTickets'

import './Ticket.scss'

const Ticket = ({ ticket }) => {
  return (
    <>
      <li className="ticket">
        <div className="ticket-header">
          <span className="ticket-price">{getformatPrice(ticket.price)}</span>
          <img className="ticket-logo" src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="logo" />
        </div>
        {ticket.segments.map((item, indexSegments) => {
          return (
            <div key={indexSegments} className="ticket-info">
              <div className="ticket-endpoint">
                <div className="ticket-endpoint__title">
                  {item.origin} – {item.destination}
                </div>
                <span>{getTimeOnFly(item.date, item.duration)}</span>
              </div>
              <div className="ticket-endpoint">
                <div className="ticket-endpoint__title">В пути</div>
                <span>{getBoardingTime(item.duration)}</span>
              </div>
              <div className="ticket-endpoint">
                <div className="ticket-endpoint__title">{getFormatTransfer(item.stops.length)}</div>
                <div>{item.stops.join(', ')}</div>
              </div>
            </div>
          )
        })}
      </li>
    </>
  )
}

export default Ticket

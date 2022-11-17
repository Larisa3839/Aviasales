import './Tickets.scss'
import ticket from '../../img/ticket-logo.svg'

const Tickets = () => {
  return (
    <ul className="results__tickets">
      <li className="ticket">
        <div className="ticket-header">
          <span className="ticket-price">13 400 Р </span>
          <img className="ticket-logo" src={ticket} alt="logo" />
        </div>
        <div className="ticket-info">
          <div className="ticket-endpoint">
            <div className="ticket-endpoint__title">MOW – HKT</div>
            <span>10:45 – 08:00</span>
          </div>
          <div className="ticket-endpoint">
            <div className="ticket-endpoint__title">В пути</div>
            <span>21ч 15м</span>
          </div>
          <div className="ticket-endpoint">
            <div className="ticket-endpoint__title">2 пересадки</div>
            <div>HKG, JNB</div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Tickets

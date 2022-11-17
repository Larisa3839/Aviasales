import './App.scss'
import ticket from '../../img/ticket-logo.svg'

import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
      </header>
      <div className="container">
        <div className="filters">
          <div className="filters-item">
            <div className="filters-item__title">Количество пересадок</div>
            <ul className="filters-item__list">
              <li className="filters-item__list__item">
                <input type="checkbox" className="custom-checkbox" id="1" />
                <label htmlFor="1">Все</label>
              </li>
              <li className="filters-item__list__item">
                <input type="checkbox" className="custom-checkbox" id="2" />
                <label htmlFor="2">Без пересадок</label>
              </li>
              <li className="filters-item__list__item">
                <input type="checkbox" className="custom-checkbox" id="3" />
                <label htmlFor="3">1 пересадка</label>
              </li>
              <li className="filters-item__list__item">
                <input type="checkbox" className="custom-checkbox" id="4" />
                <label htmlFor="4">2 пересадки</label>
              </li>
              <li className="filters-item__list__item">
                <input type="checkbox" className="custom-checkbox" id="5" />
                <label htmlFor="5">3 пересадки</label>
              </li>
            </ul>
          </div>
        </div>
        <main className="results">
          <div className="sort-tabs">
            <button className="sort-tabs__item">Самый дешевый</button>
            <button className="sort-tabs__item">Самый быстрый</button>
            <button className="sort-tabs__item">Оптимальный</button>
          </div>
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
          <button className="more">Показать еще 5 билетов!</button>
        </main>
      </div>
    </div>
  )
}

export default App

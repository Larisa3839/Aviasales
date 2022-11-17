import './App.scss'
import Filters from '../Filters'
import Tabs from '../Tabs'
import Tickets from '../Tickets'

import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
      </header>
      <div className="container">
        <Filters />
        <main className="results">
          <Tabs />
          <Tickets />
          <button className="more">Показать еще 5 билетов!</button>
        </main>
      </div>
    </div>
  )
}

export default App

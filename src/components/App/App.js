import { connect } from 'react-redux'

import './App.scss'
import Filters from '../Filters'
import Tabs from '../Tabs'
import VisibleTicketsList from '../containers/VisibleTicketsList'
import { setCountVisibilityTickets } from '../../redux/actions'
import Spiner from '../Spiner'

import logo from './logo.svg'

function App({ count, onChangeCount, initTickets }) {
  const spiner = !initTickets.isLoaded ? <Spiner /> : null
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
      </header>
      <div className="container">
        <Filters />
        <main className="results">
          <Tabs />
          <VisibleTicketsList />
          {spiner}
          <button className="more" onClick={() => onChangeCount(count + 5)}>
            Показать еще 5 билетов!
          </button>
        </main>
      </div>
    </div>
  )
}

const mapStateToProps = (store) => ({ count: store.countReducer, initTickets: store.initTicketsReducer })
const mapDispatchToProps = (dispatch) => ({ onChangeCount: (value) => dispatch(setCountVisibilityTickets(value)) })
export default connect(mapStateToProps, mapDispatchToProps)(App)

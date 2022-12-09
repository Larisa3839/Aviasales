import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'

import './App.scss'
import Filters from '../Filters'
import Tabs from '../Tabs'
import VisibleTicketsList from '../containers/VisibleTicketsList'
import * as actions from '../../redux/actions'
import Spiner from '../Spiner'

import logo from './logo.svg'

function App({ count, onChangeCount, initTickets, fetchTickets }) {
  useEffect(() => {
    fetchTickets()
  }, [])
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
const mapDispatchToProps = (dispatch) => {
  const { setCountVisibilityTickets, fetchTickets } = bindActionCreators(actions, dispatch)
  return { onChangeCount: (value) => setCountVisibilityTickets(value), fetchTickets }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

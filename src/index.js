import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import { fetchTickets } from './redux/actions'
import aviasalesApp from './redux/reducers'
import './index.scss'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore(
  aviasalesApp,
  compose(applyMiddleware(ReduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
store.dispatch(fetchTickets())
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

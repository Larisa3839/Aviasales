/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { fetchTickets } from './redux/actions'
import * as rootReducer from './redux/reducers'
import './index.scss'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})
store.dispatch(fetchTickets())
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

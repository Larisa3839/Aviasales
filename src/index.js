/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import * as rootReducer from './redux/reducers'
import './index.scss'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

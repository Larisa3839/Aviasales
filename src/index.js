import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import aviasalesApp from './redux/reducers'
import './index.scss'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore(aviasalesApp)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

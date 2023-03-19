import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CountriesApi from './context/CountriesApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CountriesApi>
    <App />
  </CountriesApi>
)

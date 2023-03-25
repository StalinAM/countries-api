import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CountriesApi from './context/CountriesApi'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CountriesApi>
      <App />
    </CountriesApi>
  </BrowserRouter>
)

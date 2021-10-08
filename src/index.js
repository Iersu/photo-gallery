import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { HashRouter as Router } from 'react-router-dom'
import { ContextProvider } from './Context'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router basename="/photo-gallery">
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

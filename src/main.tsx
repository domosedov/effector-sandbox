import React from 'react'
import ReactDOM from 'react-dom'
import './tailwind.css'
import './models/init'
import { App } from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

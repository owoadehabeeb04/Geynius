import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { StateContext } from './context/stateContext'
ReactDOM.render(
  <StateContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StateContext>,
  document.getElementById('root'),
)

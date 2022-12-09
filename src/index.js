import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'

import './style/style.scss'

//v17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
//v18+

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

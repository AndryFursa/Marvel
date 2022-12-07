import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import MarvelService from './services/MarvelService'
import './style/style.scss'

//v17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
//v18+
const marvelService = new MarvelService()
marvelService.getAllCharacters().then((res) => console.log(res))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

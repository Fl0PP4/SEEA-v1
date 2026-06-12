import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { registerSW } from 'virtual:pwa-register'
import { BrowserRouter } from 'react-router-dom'
import 'leaflet/dist/leaflet.css';

registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/SEEA/">
    <App />
  </BrowserRouter>
)


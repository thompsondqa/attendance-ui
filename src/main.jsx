import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppKitProvider } from './Reown.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppKitProvider >
    <App/>
    </AppKitProvider>
  </React.StrictMode>
)

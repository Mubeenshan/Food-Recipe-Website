import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import GlobalContext from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <GlobalContext>
    <App />
    </GlobalContext>
  </StrictMode>
  </BrowserRouter>,

)

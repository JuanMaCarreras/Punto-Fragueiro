import { createRoot } from 'react-dom/client'
import App from './App'
import './style.css'
import { StrictMode } from 'react'

const root = createRoot(document.getElementById('app'))

root.render(
  // quitar StrictMode
  <StrictMode>
    <App />
  </StrictMode>
)

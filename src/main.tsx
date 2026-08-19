import './index.css'
import App from './App'
import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')!

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}


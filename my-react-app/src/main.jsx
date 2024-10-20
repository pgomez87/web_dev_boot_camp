import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StylePractice from './components/stylePractice/StylePractice.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <StylePractice />
  </StrictMode>
)


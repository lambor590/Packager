import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { invoke } from '@tauri-apps/api/tauri'
import './index.css'

const openMainWindow = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  )
  invoke('close_splash')
  document.removeEventListener('DOMContentLoaded', openMainWindow)
}

document.addEventListener('DOMContentLoaded', openMainWindow)
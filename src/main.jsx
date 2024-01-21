import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { invoke } from '@tauri-apps/api/tauri'
import './index.css'

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  )
  await invoke('close_splash')
})
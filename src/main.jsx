import ReactDOM from 'react-dom/client'
import { ipcRenderer } from 'electron'
import App from './App.jsx'
import './index.css'

ipcRenderer.send('do-action', 'initAutoUpdater')

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

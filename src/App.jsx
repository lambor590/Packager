import { useState } from 'react'
import { ipcRenderer } from 'electron'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [appVersion, setAppVersion] = useState('')

  ipcRenderer.send('get-app-version');
  ipcRenderer.once('app-version', (event, version) => setAppVersion(version));

  return (
    <>
      <h1>Packager</h1>
      <div>
        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Version {appVersion}
        </p>
      </div>
    </>
  )
}

export default App

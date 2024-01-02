import { useEffect, useState } from 'react'
import { ipcRenderer } from 'electron'
import UpdateModal from './components/UpdateModal'
import './App.css'

function App() {
  const [appVersion, setAppVersion] = useState('')

  useEffect(() => {
    ipcRenderer.invoke('get-app-version').then(version => {
      setAppVersion(version)
    })
  }, [])

  return (
    <>
      <h1>Packager</h1>
      <div>
        <button className='btn btn-primary'>
          Test Button
        </button>
        <p>
          Version {appVersion}
        </p>
      </div>
      <UpdateModal />
    </>
  )
}

export default App

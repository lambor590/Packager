import { useState, useEffect } from 'react'
import { ipcRenderer } from 'electron'
import Modal from './Modal'
import ProgressBar from './ProgressBar'

function UpdateModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {

    ipcRenderer.on('update-available', () => {
      setIsOpen(true)
    })
    ipcRenderer.on('download-progress', (_event, progressInfo) => {
      setProgress(progressInfo.percent)
    })

    return () => {
      ipcRenderer.removeListener('update-available', setIsOpen(true))
      ipcRenderer.removeListener('download-progress', (_event, progressInfo) => {
        setProgress(progressInfo.percent)
      })
    }
  }, [])

  return (
    <Modal isOpen={isOpen} title="Actualización disponible" canBeDismissed={false}>
      {progress >= 90 ? 'Instalando actualización...' : 'Descargando actualización...'}
      <ProgressBar percentage={progress} />
    </Modal>
  )
}

export default UpdateModal
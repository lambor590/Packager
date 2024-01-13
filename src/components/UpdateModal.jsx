import { useState, useEffect } from 'react'
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater';
import Countdown from './Countdown';
import Modal from './Modal'

function UpdateModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    async function update() {
      const update = await checkUpdate();
      if (update.shouldUpdate) {
        setIsOpen(true)
        setTimeout(async () => {
          await installUpdate();
        }, 2500);
      }
    }
    update()
  }, [])

  return (
    <Modal isOpen={isOpen} title="Actualización disponible" message="La aplicación se va a reiniciar para aplicar la actualización." canBeDismissed={false}>
      <Countdown initialNumber={3} />
    </Modal>
  )
}

export default UpdateModal
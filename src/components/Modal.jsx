import '../App.css'

function Modal({ isOpen, title = null, children, canBeDismissed = true, onClose }) {
  return (
    <dialog className={`modal backdrop-blur-md backdrop-brightness-90 ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box text-left">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{children}</p>
        <div className="modal-action">
          <form method="dialog">
            {canBeDismissed &&
              <button className="btn border-none" onClick={onClose}>Cerrar</button>
            }
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default Modal
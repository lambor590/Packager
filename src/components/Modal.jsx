import '../App.css'

function Modal({ isOpen, title = null, message, children = null, canBeDismissed = true, onClose }) {
  return (
    <dialog className={`modal backdrop-blur-md backdrop-brightness-90 ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box text-left">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="pt-4">{message}</p>
        {children}
        {
          canBeDismissed &&
          <div className="modal-action">
            <form method="dialog">
              <button className="btn border-none" onClick={onClose}>Cerrar</button>
            </form>
          </div>
        }
      </div>
    </dialog>
  )
}

export default Modal
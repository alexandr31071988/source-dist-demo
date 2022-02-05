import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const modalElement = document.getElementById('modal')
const el = document.createElement('div')

const Modal = ({isOpen, setIsOpenModal, children}) => {
  useEffect(() => {
    if(modalElement){
      modalElement.appendChild(el)
      return () => {
        el.remove()
      }
    }

  },[])

  return (
    <div className="modal__container">
      {isOpen && ReactDOM.createPortal(
        <div className="modal" onClick={setIsOpenModal}>
          <div className="modal-window" onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>,
        el
      )}
    </div>
  )
}

export default Modal
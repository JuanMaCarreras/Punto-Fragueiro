import { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#app')

function ServiceHoursModal () {
  const [modalIsOpen, setModalIsOpen] = useState()

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal}>Horarios</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
        contentLabel='Ejemplo de Modal'
      >
        <h2>Ejemplo de Modal</h2>
        <p>Este es un ejemplo de modal en React.</p>
        <button onClick={closeModal}>Cerrar Modal</button>

      </Modal>

    </>
  )
}

export default ServiceHoursModal

import { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function ServiceHoursModal () {
  const [modalIsOpen, setModalIsOpen] = useState()

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(true)
  }

  return (
    <>
      <button onClick={openModal}>Horarios</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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

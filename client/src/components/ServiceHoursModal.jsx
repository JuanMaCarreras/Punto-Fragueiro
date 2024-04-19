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
        <button onClick={closeModal} className='absolute top-0 right-0 mr-5 mt-3 text-gray-600 hover:text-gray-800 text-3xl'>&times;</button>
        <div>
          <h2>Conoce Nuestros  Horarios</h2>
        </div>
        <p>Martes a sábados: 11.30hs a 14.30hs y 19.30hs a 23.30hs
          Domingos y lunes: 19.00hs a 23.30hs
        </p>

      </Modal>

    </>
  )
}

export default ServiceHoursModal

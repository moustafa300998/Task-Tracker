import React, {useState} from "react";
import Modal from "react-modal";
import Button from "../Button/Button";
import ModalContent from "../../molecules/ModalContent";

const ModalWindow = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const deleteProject = () => {
    console.log("Project deleted.");
    closeModal();
  }

  return (
    <div>
      <Button label="Delete Project" onClick={openModal}/>     
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        contentLabel="Delete Project Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'transparent',
            padding: '0'
          }
        }}
      >
      <ModalContent deleteProject={deleteProject} closeModal={closeModal} />
      </Modal>
    </div>
  );
}

Modal.setAppElement("body");

export default ModalWindow;
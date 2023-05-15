import React from "react";
import ModalWindow from "../../atoms/ModalWindow";

const DestroyWindow = ({ destroyName, isOpen, setIsOpen }) => {
  return (
    <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
      Confirm Deleting this Project. {destroyName}
      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </ModalWindow>
  );
};

export default DestroyWindow;
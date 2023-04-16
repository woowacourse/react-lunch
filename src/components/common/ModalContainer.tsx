import React from "react";
import { createPortal } from "react-dom";

interface ModalContainerProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalContainer = (props: ModalContainerProps) => {
  return createPortal(
    <div className="modal">
      <div className="modal-backdrop" onClick={props.closeModal}></div>
      <div className="modal-container">{props.children}</div>
    </div>,
    document.getElementById("modal") as HTMLDivElement
  );
};

export default ModalContainer;

import React from "react";
import { createPortal } from "react-dom";

interface ModalContainerProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalContainer = (props: ModalContainerProps) => {
  return createPortal(<>{props.children}</>, document.getElementById("modal") as HTMLDivElement);
};

export default ModalContainer;

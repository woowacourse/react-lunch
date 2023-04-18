import "./index.css";
import { createPortal } from "react-dom";
import useKeyDown from "../../hooks/useKeyDown";
import { ModalContainerProps } from "./type";

const ModalContainer = (props: ModalContainerProps) => {
  useKeyDown("Escape", props.closeModal);

  return createPortal(
    <div className="modal">
      <div className="modal-backdrop" onClick={props.closeModal}></div>
      <div className="modal-container">{props.children}</div>
    </div>,
    document.getElementById("modal") as HTMLDivElement
  );
};

export default ModalContainer;

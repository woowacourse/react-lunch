import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import styles from "./ModalPortal.module.css";

interface ModalPortalProps {
  children: ReactNode;
  onClose: () => void;
}

const ModalPortal = (props: ModalPortalProps) => {
  const { children, onClose } = props;

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      {children}
    </>,
    document.getElementById("modal-root") as HTMLDivElement
  );
};

export default ModalPortal;

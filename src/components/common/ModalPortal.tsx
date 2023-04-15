import { ReactNode, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./ModalPortal.module.css";

interface ModalPortalProps {
  children: ReactNode;
  onClose: () => void;
}

const ModalPortal = (props: ModalPortalProps) => {
  const { children, onClose } = props;

  const onKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [onKeydown]);

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      {children}
    </>,
    document.getElementById("modal-root") as HTMLDivElement
  );
};

export default ModalPortal;

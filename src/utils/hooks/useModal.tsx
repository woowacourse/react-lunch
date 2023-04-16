import { useState, useEffect } from "react";

interface PropsType {
  isClicked: boolean;
  closeButton: any;
}

export default function useModal() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    closeModalByESC();
  }, []);

  function closeModalByESC() {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    });
  }

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return { open, setOpen, closeModal, openModal };
}

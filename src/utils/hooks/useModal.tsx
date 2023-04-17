import { useState, useEffect } from "react";

export default function useModal() {
  const [open, setOpen] = useState<boolean>(false);

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

  useEffect(() => {
    closeModalByESC();
  }, []);

  useEffect(() => {
    !open &&
      window.removeEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          setOpen(false);
        }
      });
  }, [open]);

  return { open, setOpen, closeModal, openModal };
}

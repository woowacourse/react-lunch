export const useCloseModal = (modalRef: React.RefObject<HTMLDialogElement>, closeEventHandler: () => void) => {
  const closeEvent = () => {
    const current = modalRef.current;

    if (current) {
      closeEventHandler();
    }
  };

  return [closeEvent];
};

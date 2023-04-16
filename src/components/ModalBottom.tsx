import { useEffect, useRef } from 'react';

type ModalProps = React.PropsWithChildren<{
  closeModal: () => void;
}>;

export const ModalBottom = ({ closeModal, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyupEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') closeModal();
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyupEscape);
    return () => {
      window.removeEventListener('keyup', handleKeyupEscape);
    };
  }, []);

  return (
    <div className="modal modal--open" ref={modalRef}>
      <div
        className="modal-backdrop"
        onClick={() => {
          closeModal();
        }}
      ></div>
      <div className="modal-container">{children}</div>
    </div>
  );
};

import './Modal.css';

type ModalProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function Modal({ onClick, children }: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-backdrop"></div>
      <div className="modal-container">
        {children}
        <div className="button-container">
          <button
            id="modal-close-button"
            className="button button--primary text-caption"
            onClick={onClick}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

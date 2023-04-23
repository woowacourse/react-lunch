import { createPortal } from 'react-dom';
import useWrappingContext from '../../hooks/useWrappingContext';
import { ModalStore } from '../../store';
import RestaurantItem from '../RestaurantItem';
import styles from './Modal.module.css';

function Modal() {
  const { isModalOpen, modalInfo, closeModal } = useWrappingContext(ModalStore);

  return createPortal(
    <dialog open={isModalOpen}>
      <div className={styles.modalBackdrop} />
      <div className={styles.modal}>
        {modalInfo && <RestaurantItem restaurant={modalInfo} isModal />}
        <button type="button" onClick={closeModal}>
          닫기
        </button>
      </div>
    </dialog>,
    document.body
  );
}

export default Modal;

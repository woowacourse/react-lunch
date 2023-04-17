import { useContext } from 'react';
import { createPortal } from 'react-dom';
import Store from '../../store';
import RestaurantItem from '../RestaurantItem';
import styles from './Modal.module.css';

function Modal() {
  const { isModalOpen, setIsModalOpen, restaurantList, modalId } = useContext(Store);
  const restaurant = restaurantList?.find((item) => item.id === modalId);

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.removeProperty('overflow');
  };

  return createPortal(
    <dialog open={isModalOpen}>
      <div className={styles.modalBackdrop} />
      <div className={styles.modal}>
        {restaurant && <RestaurantItem restaurant={restaurant} isModal />}
        <button type="button" onClick={closeModal}>
          닫기
        </button>
      </div>
    </dialog>,
    document.body
  );
}

export default Modal;

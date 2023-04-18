import { useEffect } from 'react';
import styles from '../Modal/Modal.module.css';
import { getSelectedRestaurant } from '../../data/parseFn';
import { ModalProps } from '../../types/types';
import { CATEGORY_TO_FILENAME } from '../../image/image';

const Modal = (props: ModalProps) => {
  const { restaurantId, handleClose } = props;

  const selectedRestaurant = getSelectedRestaurant(restaurantId);

  const imageFile = CATEGORY_TO_FILENAME[selectedRestaurant.category];

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={imageFile} alt={selectedRestaurant.category} className={styles.icon} />
        </div>
        <div>
          <h3 className={styles.subtitle}>{selectedRestaurant.name}</h3>
          <div className={styles.distance}>{`캠퍼스부터 ${selectedRestaurant.distance}분 내`}</div>
          <div className={styles.description}>{selectedRestaurant.description}</div>
          <div className={styles.link}>
            <a href={selectedRestaurant.link}>{selectedRestaurant.link}</a>
          </div>
        </div>
        <button type="button" className={styles.button} onClick={handleClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;

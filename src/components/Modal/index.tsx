import React, { useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useLunchDispatch, useLunchState } from '../../hooks';
import { TOGGLE_MODAL } from '../../store/action';
import RestaurantItem from '../RestaurantItem';
import styles from './Modal.module.css';

function Modal() {
  const state = useLunchState();
  const dispatch = useLunchDispatch();

  const restaurant = useMemo(() => {
    const { restaurantList, modalId } = state;
    return restaurantList.find(
      (restaurantItem) => restaurantItem.id === modalId
    );
  }, []);

  const handleCloseModal = useCallback(() => {
    dispatch({ type: TOGGLE_MODAL });
    document.body.style.removeProperty('overflow');
  }, []);

  return (
    <>
      {createPortal(
        <dialog open={state.isModalOpen}>
          <div className={styles.modalBackdrop} />
          <div className={styles.modal}>
            {restaurant && <RestaurantItem restaurant={restaurant} isModal />}
            <button type="button" onClick={handleCloseModal}>
              닫기
            </button>
          </div>
        </dialog>,
        document.body
      )}
    </>
  );
}

export default React.memo(Modal);

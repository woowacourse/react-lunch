import { useMemo } from 'react';
import useModal from '../../hooks/useModal';
import useWrappingContext from '../../hooks/useWrappingContext';
import { SelectorStore, ModalStore } from '../../store';
import Modal from '../Modal';
import RestaurantItem from '../RestaurantItem';
import styles from './RestaurantList.module.css';
import useRestaurantList from './hooks/useRestaurantList';

function RestaurantList() {
  const { selector } = useWrappingContext(SelectorStore);
  const { isModalOpen, modalInfo, openModal, closeModal } = useModal();

  const value = useMemo(
    () => ({
      isModalOpen,
      modalInfo,
      openModal,
      closeModal,
    }),
    [isModalOpen, modalInfo]
  );

  const restaurantList = useRestaurantList(selector);

  return (
    <ModalStore.Provider value={value}>
      <ul className={styles.restaurantList}>
        {restaurantList.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} isModal={false} />
        ))}
      </ul>
      <Modal />
    </ModalStore.Provider>
  );
}

export default RestaurantList;

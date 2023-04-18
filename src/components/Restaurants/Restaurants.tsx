import { useState } from 'react';
import { RestaurantFilterProps, RestaurantListProps, ModalProps } from '../../types/types';
import RestaurantFilter from '../RestaurantFilter/RestaurantFilter';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import Modal from '../Modal/Modal';
import { useFilterOptions } from '../../hooks/useFilterOptions';
import { useModal } from '../../hooks/useModal';

const Restaurants = () => {
  const [restaurantId, setRestaurantId] = useState(0);
  const { category, sorting, handleCategoryChange, handleSortingChange } = useFilterOptions();
  const { isModalOpen, openModal, closeModal } = useModal(false);

  const handleRestaurantIdChange = (restaurantId: number) => {
    setRestaurantId(restaurantId);
    openModal();
  };

  const restaurantFilterProps: RestaurantFilterProps = {
    onCategoryChange: handleCategoryChange,
    onSortingChange: handleSortingChange,
  };

  const restaurantListProps: RestaurantListProps = {
    category,
    sorting,
    changeRestaurantId: handleRestaurantIdChange,
  };

  const modalProps: ModalProps = {
    restaurantId: restaurantId,
    handleClose: closeModal,
  };

  return (
    <>
      <RestaurantFilter {...restaurantFilterProps} />
      <RestaurantsList {...restaurantListProps} />
      {isModalOpen && <Modal {...modalProps} />}
    </>
  );
};

export default Restaurants;

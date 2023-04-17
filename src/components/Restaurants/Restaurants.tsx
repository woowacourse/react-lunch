import { useState } from 'react';
import { RestaurantFilterProps, RestaurantListProps, ModalProps } from '../../types/types';
import RestaurantFilter from '../RestaurantFilter/RestaurantFilter';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import Modal from '../Modal/Modal';
import { useFilterOptions } from '../../hooks/useFilterOptions';

const Restaurants = () => {
  const { category, sorting, handleCategoryChange, handleSortingChange } = useFilterOptions();
  const [restaurantId, setRestaurantId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRestaurantIdChange = (restaurantId: number) => {
    setRestaurantId(restaurantId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
    handleClose: handleCloseModal,
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

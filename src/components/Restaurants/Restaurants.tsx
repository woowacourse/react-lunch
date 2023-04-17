import { useState } from 'react';
import {
  RestaurantFilterProps,
  RestaurantListProps,
  ModalProps,
  CategoryFilter,
  SortingFilter,
} from '../../types/types';
import RestaurantFilter from '../RestaurantFilter/RestaurantFilter';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import Modal from '../Modal/Modal';

const Restaurants = () => {
  const [category, setCategory] = useState<CategoryFilter>('전체');
  const [sorting, setSorting] = useState<SortingFilter>('이름순');
  const [restaurantId, setRestaurantId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryChange = (category: CategoryFilter) => {
    setCategory(category);
  };

  const handleSortingChange = (sorting: SortingFilter) => {
    setSorting(sorting);
  };

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
